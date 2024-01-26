import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import * as z from "zod";

const EmailSchema = z.object({
  email: z
    .string()
    .email()
    .min(1, "Email is required")
    .max(255, "Email must be less than 255 characters long"),
});



export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email } = EmailSchema.parse(body);

        const existingEmail = await db.waitlist.findUnique({
            where : { email : email }
        })

        if(existingEmail) {
            return NextResponse.json(
                { email: null, message: "Email already exists"},
                { status: 201 }
            )
        }

        const newEmail = await db.waitlist.create({
            data: {
                email: email
            }
        })

        return NextResponse.json(
            { email: newEmail, message: "Email added successfully!" },
            { status: 201 }
        );

    }
    catch (error) {
        console.log(`Email Waitlist Error: ${error}`)
        return NextResponse.json(
            { message : error }, { status: 500}
        );
    }
}
