import { getSession } from "@/authentication";
import connectDB from "@/db";
import Story from "@/src/models/Story";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const session = await getSession();
    if (!session) return NextResponse.json("Unautohrized", { status: 401 });
    try {
        await connectDB();

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("User not found!", { status: 404 });

        const id = new URL(request.url).searchParams.get("id") || "";

        const story = await Story.findOne({ _id: id, isPublished: false });
        if (!story)
            return NextResponse.json("Story not found!", { status: 404 });

        const body = await request.json();

        story.pages.push(body);

        await story.save();

        return NextResponse.json("New page added", { status: 201 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}