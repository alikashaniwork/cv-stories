import { getSession } from "@/authentication";
import connectDB from "@/db";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const session = await getSession();
    if (!session)
        return NextResponse.json("Please Sign In Or Create Account", {
            status: 401,
        });
    try {
        await connectDB();

        const { email } = await request.json();

        const userExists = await User.findOne({ email });

        if (userExists)
            return NextResponse.json("Email Already Exists", { status: 400 });

        return NextResponse.json("Email Is Available", { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
