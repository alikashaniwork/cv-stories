import connectDB from "@/db";
import Story from "@/src/models/Story";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<void | Response> {
    try {
        connectDB();

        const stories = await Story.aggregate([{ $sample: { size: 5 } }]);

        const authorsID = stories.map((story) => story.user);

        const authors = await Story.aggregate([
            { $match: { authorId: { $in: authorsID } } },
            { $sample: { size: 5 } },
        ]);

        const list = {
            stories,
            authors,
        };

        return NextResponse.json(list, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
