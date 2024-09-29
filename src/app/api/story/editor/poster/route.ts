import { getSession } from "@/authentication";
import connectDB from "@/db";
import Story from "@/src/models/Story";
import User from "@/src/models/User";
import cloudinary from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function PATCH(request: NextRequest) {
    const session = await getSession();
    if (!session) return NextResponse.json("Unauthorized", { status: 401 });
    try {
        await connectDB();

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("User not found!", { status: 404 });

        const id = new URL(request.url).searchParams.get("id") || "";

        const story = await Story.findOne({ _id: id, isPublished: false });
        if (!story)
            return NextResponse.json("Story not found!", { status: 404 });

        const { photo, cloudinary_id } = await request.json();

        if (story.cloudinary_id) {
            const public_id = story.cloudinary_id!;
            cloudinary.v2.uploader.destroy(public_id);
        }

        story.poster = photo;
        story.cloudinary_id = cloudinary_id;

        await story.save();

        return NextResponse.json("New poster uploaded", { status: 201 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function DELETE(request: NextRequest): Promise<void | Response> {
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

        if (story.cloudinary_id) {
            const public_id = story.cloudinary_id!;
            cloudinary.v2.uploader.destroy(public_id);
        }

        story.poster = "";
        story.cloudinary_id = "";

        await story.save();

        return NextResponse.json("Poster deleted", { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
