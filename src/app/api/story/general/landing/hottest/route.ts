import connectDB from "@/db";
import Story from "@/src/models/Story";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await connectDB();

        const type = new URL(request.url).searchParams.get("type") || "short";

        const story = await Story.findOne({
            isPublished: true,
            type,
            "featured.hot": true,
        });
        // .populate({
        //     path: "user",
        //     model: "User",
        //     select: { fullName: 1, photo: 1 },
        // });

        return NextResponse.json(story, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
