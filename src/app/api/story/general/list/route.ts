import connectDB from "@/db";
import Story from "@/src/models/Story";
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
        let sortOrder: { [key: string]: 1 | -1 } = { createdAt: 1 }; // Default to ascending createdAt
        if (sort === "Newest") {
            sortOrder = { createdAt: -1 };
        } else if (sort === "Most Popular") {
            sortOrder = { rating: -1 };
        }

        // Genres:
        const genres: string[] = (parsedQueries.genres as string[]) || [];
        if (genres.length > 0) {
            query["genres"] = { $in: genres };
        }

        // Languages:
        const languages: string[] = (parsedQueries.languages as string[]) || [];
        if (languages.length > 0) {
            query["language"] = {
                $in: languages.map((language) => new RegExp(language, "i")),
            };
        }

        // Rated:
        const rated: string[] = (parsedQueries.rated as string[]) || [];
        if (rated.length > 0) {
            query["rated"] = {
                $in: rated.map((rating) => new RegExp(rating, "i")),
            };
        }

        // Rating:
        const rating: number = Number(parsedQueries.rating) || 0;
        if (rating > 0) {
            query["rating"] = { $gte: rating };
        }

        // Type:
        if (parsedQueries.type) {
            const convertedType: string = parsedQueries.type
                .split("-")
                .join(" ");
            query["type"] = new RegExp(convertedType, "i");
        }

        // Published:
        query["isPublished"] = true;

        // Pages:
        const pages: number[] = (parsedQueries.pages as number[]) || [];

        const stories = await Story.aggregate([
            { $match: query },
            { $addFields: { pageCount: { $size: "$pages" } } },
            { $sort: sortOrder },
            {
                $lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "user",
                },
            },
            { $unwind: "$user" },
            {
                $project: {
                    "user.fullName": 1,
                    "user._id": 1,
                    type: 1,
                    title: 1,
                    poster: 1,
                    cloudinary_id: 1,
                    genres: 1,
                    rated: 1,
                    language: 1,
                    summary: 1,
                    pages: 1,
                    characters: 1,
                    locations: 1,
                    rating: 1,
                    isPublished: 1,
                    createdAt: 1,
                    updatedAt: 1,
                },
            },
        ]).exec();

        return NextResponse.json(stories, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
