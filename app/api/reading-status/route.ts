import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import * as z from "zod";

const ReadingStatusPOSTSchema = z.object({
  id: z.number().int().optional(),
  user_id: z.number().int(),
  article_id: z.string(),
  status: z.boolean(),
  level: z.string(),
  last_accessed: z.date().optional(),
});

const ReadingStatusGETSchema = z.object({
  id: z.number().int().optional(),
  user_id: z.number().int(),
  article_id: z.string(),
});



export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const user_id = searchParams.get("user_id");
    const article_id = searchParams.get("article_id");

    if (!user_id || !article_id) {
      return NextResponse.json(
        { message: "Both user_id and article_id are required!" },
        { status: 400 }
      );
    }

    const readingStatus = await db.readingStatus.findFirst({
      where: {
        user_id: Number(user_id),
        article_id: article_id,
      }
    });

    return NextResponse.json(readingStatus, { status: 200 });
  } catch (error) {
    console.log(`Reading Status Error: ${error}`);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { user_id, article_id, status, last_accessed, level } =
      ReadingStatusPOSTSchema.parse(body);

    const readingStatus = await db.readingStatus.findFirst({
      where: {
        user_id: user_id,
        article_id: article_id,
      },
    });

    if (readingStatus) {
      await db.readingStatus.update({
        where: {
          id: readingStatus.id,
        },
        data: {
          status: status,
          updated_at: new Date(Date.now()).toISOString(),
        },
      });

      return NextResponse.json(
        {
          reading_status: readingStatus,
          message: "Reading Status updated successfully!",
        },
        { status: 200 }
      );
    }
    
    const newReadingStatus = await db.readingStatus.create({
      data: {
        user_id: user_id,
        article_id: article_id,
        level: level,
        last_accessed: last_accessed,
        status: status,
      },
    });

    return NextResponse.json(
      {
        reading_status: newReadingStatus,
        message: "Reading Status added successfully!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(`Reading Status Error: ${error}`);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const res = await req.json();

    const { user_id, article_id } = ReadingStatusGETSchema.parse(res);

    const readingStatus = await db.readingStatus.findFirst({
      where: {
        user_id: user_id,
        article_id: article_id,
      },
      orderBy : {
        updated_at: 'desc'
      }
    });

    if (!readingStatus) {
      return NextResponse.json(
        { message: "Reading Status not found!" },
        { status: 404 }
      );
    }

    return NextResponse.json({ ...readingStatus, updated_at: new Date(Date.now()).toISOString(), message : "Found reading status" }, { status: 200 });
  } catch (error) {
    console.log(`Reading Status Error: ${error}`);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}