import { encrypt } from "@/authentication";
import connectDB from "@/db";
import User from "@/src/models/User";
import { addMonths } from "date-fns";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectDB();

        const { email, password, fullName } = await request.json();

        const createdUser = await User.create({
            email,
            password,
            fullName,
        });

        const currentDate = new Date();
        const expires = addMonths(currentDate, 1);

        const session = await encrypt({
            userId: String(createdUser._id),
            expires,
        });

        cookies().set("session", session, { expires, httpOnly: true });

        return NextResponse.json("Signed In", { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
