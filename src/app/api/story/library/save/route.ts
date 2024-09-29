import { getSession } from "@/authentication";
import connectDB from "@/db";
import Story from "@/src/models/Story";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const session = await getSession();
    if (!session)
        return NextResponse.json("Please Sign In Or Create Account", {
            status: 401,
        });
    try {
        await connectDB();

        const user = await User.findById(session.userId);

        if (!user) return NextResponse.json("User not found!", { status: 404 });

        const stories = await Story.find({
            _id: { $in: user.saved },
            isPublished: true,
        }).sort({
            createdAt: -1,
        });

        return NextResponse.json(stories, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function PATCH(request: NextRequest) {
    const session = await getSession();
    if (!session) return NextResponse.json("Unauthorized", { status: 401 });
    try {
        await connectDB();

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("User not found!", { status: 404 });

        const id = new URL(request.url).searchParams.get("id") || "";

        const story = await Story.findOne({ _id: id, isPublished: true });
        if (!story)
            return NextResponse.json("Story not found!", { status: 404 });

        const alreadySaved = user.saved?.find((s) => s.toString() === id);

        let responseMessage = "";

        if (alreadySaved) {
            user.saved = user.saved.filter((s) => s.toString() !== id);
            responseMessage = "Removed";
        } else {
            user.saved = [story._id, ...user.saved];
            responseMessage = "Saved";
        }

        await user.save();

        return NextResponse.json(responseMessage, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
