import { getSession } from "@/authentication";
import connectDB from "@/db";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<void | Response> {
    const session = await getSession();
    if (!session)
        return NextResponse.json("Please Sign In Or Create Account", {
            status: 401,
        });
    try {
        await connectDB();

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("User not found!", { status: 404 });

        const { username } = await request.json();

        const usernameExists = await User.findOne({ username });

        if (usernameExists) {
            return NextResponse.json("Has been already registered!", {
                status: 400,
            });
        } else {
            return NextResponse.json("Available", { status: 200 });
        }
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
