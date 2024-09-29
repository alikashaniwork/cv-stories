import connectDB from "@/db";
import Story from "@/src/models/Story";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await connectDB();

        const storyOfWeek = await Story.findOne({
            isPublished: true,
            "featured.bestOfWeek": true,
        }).sort({ createdAt: -1 });
        // .populate({
        //     path: "user",
        //     model: "User",
        //     select: { fullName: 1, photo: 1 },
        // });

        const storyOfMonth = await Story.findOne({
            isPublished: true,
            "featured.bestOfMonth": true,
        }).sort({ createdAt: -1 });
        // .populate({
        //     path: "user",
        //     model: "User",
        //     select: { fullName: 1, photo: 1 },
        // });

        const stories = [storyOfWeek, storyOfMonth];

        return NextResponse.json(stories, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
