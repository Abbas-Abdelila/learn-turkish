import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import * as z from "zod";

const UserSchema = z.object({
  email: z
    .string()
    .email()
    .min(1, "Email is required")
    .max(255, "Email must be less than 255 characters long"),
  password: z
    .string()
    .min(6, "Password is required and must be at least 6 characters long"),
  username: z
    .string()
    .min(3, "Username is required and must be at least 3 characters long")
    .max(20, "Username must be less than 20 characters long"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password, username } = UserSchema.parse(body);

    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "Email already exists" },
        { status: 400 }
      );
    }

    const existingUserByUsername = await db.user.findUnique({
      where: { username: username },
    });
    if (existingUserByUsername) {
      return NextResponse.json(
        { user: null, message: "Username already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.user.create({
      data: {
        email: email,
        username: username,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { user: newUser, message: "User created successfully!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
