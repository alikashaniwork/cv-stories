import connectDB from "@/db";
import Story from "@/src/models/Story";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<void | Response> {
    try {
        connectDB();

        const keyword = new URL(request.url).searchParams.get("keyword") || "";

        const stories = await Story.find({
            isPublished: true,
            $or: [
                { title: { $regex: new RegExp(keyword, "i") } },
                { genres: { $regex: new RegExp(keyword, "i") } },
                { rated: { $regex: new RegExp(keyword, "i") } },
                { language: { $regex: new RegExp(keyword, "i") } },
                { summary: { $regex: new RegExp(keyword, "i") } },
            ],
        }).sort({ createdAt: -1 });

        const authors = await User.find({
            $or: [
                { fullName: { $regex: new RegExp(keyword, "i") } },
                { username: { $regex: new RegExp(keyword, "i") } },
            ],
        }).sort({
            createdAt: -1,
        });

        const list = {
            authors,
            stories,
        };

        return NextResponse.json(keyword ? list : [], { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}
