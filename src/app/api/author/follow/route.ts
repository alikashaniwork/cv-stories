import { getSession } from "@/authentication";
import connectDB from "@/db";
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

        const user = await User.findOne({ email: session.email });
        if (!user) return NextResponse.json("User not found!", { status: 404 });

        const authors = await User.find({ _id: { $in: user.followings } });

        return NextResponse.json(authors, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function PATCH(request: NextRequest) {
    const session = await getSession();
    if (!session)
        return NextResponse.json("Please Sign In Or Create Account", {
            status: 401,
        });
    try {
        await connectDB();

        const user = await User.findOne({ email: session.email });
        if (!user) return NextResponse.json("User not found!", { status: 404 });

        const id = new URL(request.url).searchParams.get("id") || "";

        const author = await User.findOne({ _id: id });
        if (!author || author.stories.length === 0)
            return NextResponse.json("Author not found!", { status: 404 });

        const alreadySaved = user.followings?.find((a) => a.toString() === id);

        let responseMessage = "";

        if (alreadySaved) {
            user.followings = user.followings.filter(
                (a) => a.toString() !== id
            );
            author.followers = author.followers.filter(
                (a) => a.toString() !== user._id.toString()
            );
            responseMessage = "Unfollowed";
        } else {
            user.followings = [author._id, ...user.followings];
            author.followers = [user._id, ...author.followers];
            responseMessage = "Followed";
        }

        await user.save();
        await author.save();

        return NextResponse.json(responseMessage, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
