import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import * as z from "zod";

const TitleSchema = z.object({
  title: z
    .string()
    .min(1, "title is required")
    .max(255, "title must be less than 255 characters long"),
    mdx_file_id: z.string().min(1, "MDX File ID is required"),
    level: z.string().min(1, "Level is required")
});



export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title, mdx_file_id, level } = TitleSchema.parse(body);

        const existingArticle = await db.article.findFirst({
            where : { mdx_file_id : mdx_file_id}
        })

        if(existingArticle) {
            return NextResponse.json(
                { message: "Article already exists"},
                { status: 201 }
            )
        }

        const newArticle = await db.article.create({
            data: {
                title : title,
                mdx_file_id: mdx_file_id,
                level : level
            }
        })

        return NextResponse.json(
            { article: newArticle, message: "Article added successfully!" },
            { status: 201 }
        );

    }
    catch (error) {
        console.log(`Article Error: ${error}`)
        return NextResponse.json(
            { message : error }, { status: 500}
        );
    }
}
