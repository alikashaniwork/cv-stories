"use client";

import { useSearchParams } from "next/navigation";
import { useContext } from "react";
import { Context } from "../../../../_Context";
import Item from "./item/Item";

const List = () => {
    const type = useSearchParams().get("type") || "short";
    const { stories } = useContext(Context);
    return (
        <ul className="p-4 md:p-6 w-full grid lg:grid-cols-2 gap-4">
            {stories?.map(
                (story) =>
                    story.type.toLowerCase().includes(type) && (
                        <Item key={story._id} story={story} />
                    )
            )}
        </ul>
    );
};

export default List;
