"use client";

import Empty from "@/src/app/_components/modules/Empty";
import useFetchStoryDetails from "@/src/queries/story/editor/useFetchDetails";
import { useParams } from "next/navigation";
import Item from "./Item";

const List = () => {
    const { id } = useParams<{ id: string }>();
    const { data: story } = useFetchStoryDetails(id);
    if (!story) return null;
    const { locations } = story;
    return (
        <ul className="p-4 pt-16 pb-20">
            <Empty message="No Location!" length={locations.length} />
            {locations?.map((location, index) => (
                <Item key={index} location={location!} />
            ))}
        </ul>
    );
};

export default List;
