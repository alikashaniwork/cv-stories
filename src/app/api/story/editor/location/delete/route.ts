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

        const locationId =
            new URL(request.url).searchParams.get("locationId") || "";

        const objectId = new Types.ObjectId(locationId);
        const locationIndex = story.locations.findIndex(
            (f) => f._id?.toString() === objectId.toString()
        );

        if (locationIndex === -1)
            return NextResponse.json("Location not found!", { status: 404 });

        story.locations.splice(locationIndex, 1);

        await story.save();

        return NextResponse.json("location deleted", { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
