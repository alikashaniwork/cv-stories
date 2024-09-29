import connectDB from "@/db";
import Story from "@/src/models/Story";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params: { type } }: { params: { type: string } }
) {
    try {
        await connectDB();

        const stories = await Story.find({ isPublished: true, type }).sort({
            type: -1,
        });
        // .populate({
        //     path: "user",
        //     model: "User",
        //     select: { fullName: 1, photo: 1 },
        // });

        return NextResponse.json(stories, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
