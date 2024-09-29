"use client";

import Empty from "@/src/app/_components/modules/Empty";
import useFetchStoryDetails from "@/src/queries/story/editor/useFetchDetails";
import { useParams } from "next/navigation";
import MenuContainer from "./Menu";

const Body = () => {
    const { id } = useParams<{ id: string }>();
    const { data: story } = useFetchStoryDetails(id);
    return (
        <div className="p-4 pt-16">
            <Empty message="No Page!" length={story?.pages.length || 0} />
            <ul className="flex flex-col gap-2">
                {story?.pages?.map((page) => (
                    <li
                        key={page.pageNumber}
                        className="bg-[#1d1d1d] rounded-2xl"
                    >
                        <div className="flex items-center justify-between gap-1 p-2 px-4 border-b border-neutral-800">
                            <p>
                                <span className="mr-[6px] uppercase text-sm text-neutral-400 font-sfl tracking-[2px]">
                                    Page
                                </span>
                                <span>{page.pageNumber}</span>
                            </p>
                            <MenuContainer pageId={page._id!} />
                        </div>
                        <p className="w-full p-3 px-4 text-ellipsis text-nowrap overflow-hidden">
                            {page.content}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Body;
