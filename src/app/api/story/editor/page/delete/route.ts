import { getSession } from "@/authentication";
import connectDB from "@/db";
import Story from "@/src/models/Story";
import User from "@/src/models/User";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
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

        const pageId = new URL(request.url).searchParams.get("pageId") || "";

        const objectId = new Types.ObjectId(pageId);
        const pageIndex = story.pages.findIndex(
            (f) => f._id?.toString() === objectId.toString()
        );

        if (pageIndex === -1)
            return NextResponse.json("Page not found!", { status: 404 });

        story.pages.splice(pageIndex, 1);

        await story.save();

        return NextResponse.json("Page deleted", { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
