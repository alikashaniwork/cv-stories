import { getSession } from "@/authentication";
import connectDB from "@/db";
import Story from "@/src/models/Story";
import User from "@/src/models/User";
import { cookies } from "next/headers";
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
        if (!user) return NextResponse.json("user not found", { status: 404 });

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function DELETE(request: NextRequest): Promise<void | Response> {
    const session = await getSession();
    if (!session)
        return NextResponse.json("Please Sign In Or Creact An Account!", {
            status: 401,
        });
    try {
        await connectDB();

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("User not found!", { status: 404 });

        await Story.find({ user: user._id }).deleteMany();

        await user.deleteOne();

        cookies().set("session", "", { expires: new Date(0) });

        return NextResponse.json("Account Deleted", { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
