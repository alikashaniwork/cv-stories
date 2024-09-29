import connectDB from "@/db";
import Story from "@/src/models/Story";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await connectDB();

        const id = new URL(request.url).searchParams.get("id") || "";

        const story = await Story.findOne({
            _id: id,
            isPublished: true,
        });
        // .populate({
        //     path: "user",
        //     model: "User",
        //     select: {
        //         fullName: 1,
        //         photo: 1,
        //     },
        // });

        if (!story)
            return NextResponse.json("Story not found!", { status: 404 });

        return NextResponse.json(story, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
