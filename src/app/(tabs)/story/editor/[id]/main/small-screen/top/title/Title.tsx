"use client";

import useFetchStoryDetails from "@/src/queries/story/editor/useFetchDetails";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import Edit from "./Edit";

const Title = () => {
    const { id } = useParams<{ id: string }>();
    const { data: story } = useFetchStoryDetails(id);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <div className="flex-1 flex items-center justify-between">
                <div className="flex flex-col">
                    <p className="text-[.9rem] text-neutral-400 font-sfl tracking-[2px]">
                        TITLE
                    </p>
                    <p className="capitalize text-2xl">{story?.title}</p>
                </div>
                <button
                    className="bg-neutral-800 p-[6px] rounded-full"
                    onClick={handleOpen}
                >
                    <Image
                        width={16}
                        height={16}
                        src="/icons/edit/blue.png"
                        alt=""
                    />
                </button>
            </div>
            <Edit open={open} onClose={handleOpen} />
        </>
    );
};

export default Title;
