import connectDB from "@/db";
import User from "@/src/models/User";
import { SortOrder } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await connectDB();
        const url = new URL(request.url);
        const searchParams = url.searchParams;

        interface Query {
            [key: string]: any;
        }
        let query: Query = {};
        const queries = searchParams.get("queries") || "";
        const parsedQueries = JSON.parse(queries);

        // Sort:
        const sort = parsedQueries.sort;
        let sortOrder: { [key: string]: SortOrder };
        if (sort === "Newest") {
            sortOrder = { createdAt: -1 };
        } else if (sort === "Most Popular") {
            sortOrder = { rating: -1 };
        } else {
            sortOrder = { createdAt: 1 };
        }

        const authors = await User.find({});

        return NextResponse.json(authors, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
