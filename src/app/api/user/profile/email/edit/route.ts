import { getSession } from "@/authentication";
import connectDB from "@/db";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    const session = await getSession();
    if (!session)
        return NextResponse.json("Please Sign In Or Create Account", {
            status: 401,
        });
    try {
        await connectDB();

        const { email } = await request.json();

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("User not found!", { status: 404 });

        user.email = email;

        await user.save();

        return NextResponse.json("Email Address Updated", { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
