import connectDB from "@/db";
import Story from "@/src/models/Story";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await connectDB();

        const stories = await Story.aggregate([
            { $match: { isPublished: true } },
            { $sample: { size: 8 } },
        ]);

        return NextResponse.json(stories, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
