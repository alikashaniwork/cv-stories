import connectDB from "@/db";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectDB();

        const { email } = await request.json();

        const userExists = await User.findOne({ email });

        if (userExists)
            return NextResponse.json("Email Already Exists", { status: 400 });

        return NextResponse.json("Email Is Available", { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 500 });
    }
}
