import connectDB from "@/db";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await connectDB();

        const id = new URL(request.url).searchParams.get("id") || "";

        const author = await User.findOne({ _id: id }).populate({
            path: "stories",
            model: "Story",
            select: {
                title: 1,
                type: 1,
                poster: 1,
                genres: 1,
                rated: 1,
                language: 1,
            },
        });
        return NextResponse.json(author, { status: 200 });
        // if (author?.stories?.length! > 0) {
        //     return NextResponse.json(author, { status: 200 });
        // } else {
        //     return NextResponse.json("Author not found!", { status: 404 });
        // }
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
