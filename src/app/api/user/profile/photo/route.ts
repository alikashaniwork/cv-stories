import { getSession } from "@/authentication";
import connectDB from "@/db";
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
    if (!session)
        return NextResponse.json("Please Sign In Or Create Account", {
            status: 401,
        });
    try {
        await connectDB();

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("user not found", { status: 404 });

        const { photo, cloudinary_id } = await request.json();

        if (user.cloudinary_id) {
            const public_id = user.cloudinary_id!;
            cloudinary.v2.uploader.destroy(public_id);
        }

        user.photo = photo;
        user.cloudinary_id = cloudinary_id;

        await user.save();

        return NextResponse.json("New photo uploaded", { status: 201 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function DELETE(request: NextRequest): Promise<void | Response> {
    const session = await getSession();
    if (!session)
        return NextResponse.json("Please Sign In Or Create Account", {
            status: 401,
        });
    try {
        await connectDB();

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("user not found", { status: 404 });

        if (user.cloudinary_id) {
            const public_id = user.cloudinary_id!;
            cloudinary.v2.uploader.destroy(public_id);
        }

        user.photo = "";
        user.cloudinary_id = "";

        await user.save();

        return NextResponse.json("Photo deleted", { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
