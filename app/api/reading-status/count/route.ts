import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import * as z from "zod";

const QueryParametersSchema = z.object({
    user_id: z.string().min(1, "user_id is required"),
    levels: z.string().min(1, "At least one level is required"),
});


export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const parsedQuery = QueryParametersSchema.parse(Object.fromEntries(searchParams));

        const { user_id, levels } = parsedQuery;
    
        if (!user_id || !levels) {
        return NextResponse.json(
            { message: "Both user_id and level are required!" },
            { status: 400 }
        );
        }

        
        const levelsForDb = levels.split("-");
        const readingStatus = await db.readingStatus.findMany({
        where: {
            user_id: Number(user_id),
            level: {    
            in: levelsForDb
            },
            status: true
        }
        });
    
        return NextResponse.json(readingStatus, { status: 200 });
    } catch (error) {
        console.log(`Reading Status Error: ${error}`);
        return NextResponse.json({ message: error }, { status: 500 });
    }
    }