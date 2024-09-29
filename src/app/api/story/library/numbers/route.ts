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

        const publishedStories = await Story.find({
            user: user._id,
            isPublished: true,
        }).sort({
            createdAt: -1,
        });

        const draftStories = await Story.find({
            user: user._id,
            isPublished: false,
        }).sort({
            createdAt: -1,
        });

        // Published
        const publishedShorts = publishedStories.filter(
            (s) => s.type === "short"
        ).length;
        const publishedSerieses = publishedStories.filter(
            (s) => s.type === "series"
        ).length;
        const publishedNovels = publishedStories.filter(
            (s) => s.type === "novel"
        ).length;

        // Draft
        const draftShorts = draftStories.filter(
            (s) => s.type === "short"
        ).length;
        const draftSerieses = draftStories.filter(
            (s) => s.type === "series"
        ).length;
        const draftNovels = draftStories.filter(
            (s) => s.type === "novel"
        ).length;

        const storyNumbers = {
            published: {
                shorts: publishedShorts,
                serieses: publishedSerieses,
                novels: publishedNovels,
            },
            draft: {
                shorts: draftShorts,
                serieses: draftSerieses,
                novels: draftNovels,
            },
        };

        return NextResponse.json(storyNumbers, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
