"use client";

import useFetchStories from "@/src/queries/story/general/useFetchList";
import { useSearchParams } from "next/navigation";
import Item from "./item/Item";

const List = () => {
    const type = useSearchParams().get("type") || "short";
    const searchParams = useSearchParams();
    const sortOrder = searchParams.get("sort") || "newest";
    const genres = searchParams.getAll("genres");
    const languages = searchParams.getAll("languages");
    const rated = searchParams.getAll("rated");
    const rating = searchParams.getAll("rating");

    const queries = {
        type,
        sort: sortOrder,
        genres,
        languages,
        rated,
        rating,
    };
    const { data: stories } = useFetchStories(queries);
    return (
        <ul className="pb-16 pt-2 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 min-[1400px]:grid-cols-3 gap-4">
            {stories?.map((story) => (
                <Item key={story._id} story={story} />
            ))}
        </ul>
    );
};

export default List;
