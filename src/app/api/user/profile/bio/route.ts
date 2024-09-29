import { getSession } from "@/authentication";
import connectDB from "@/db";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest): Promise<void | Response> {
    const session = await getSession();
    if (!session)
        return NextResponse.json("Please Sign In Or Create Account", {
            status: 401,
        });
    try {
        await connectDB();

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("User not found!", { status: 404 });

        const { bio } = await request.json();

        user.bio = bio;

        await user.save();

        return NextResponse.json("Biography updated", { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
