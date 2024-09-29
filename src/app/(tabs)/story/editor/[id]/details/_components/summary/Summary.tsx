"use client";

import useFetchStoryDetails from "@/src/queries/story/editor/useFetchDetails";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import Edit from "./Edit";

const Summary = () => {
    const { id } = useParams<{ id: string }>();
    const { data: story } = useFetchStoryDetails(id);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <div
                className="bg-neutral-800 rounded-2xl py-2 p-4 mt-4 shadow-sm shadow-black/80"
                onClick={handleOpen}
            >
                <div className="flex items-center justify-between pb-2">
                    <p className="text-neutral-400 font-sfl tracking-wider">
                        Summary
                    </p>
                    <Image
                        width={16}
                        height={16}
                        src="/icons/edit/blue.png"
                        alt=""
                    />
                </div>
                <p className="pt-2 capitalize leading-7 border-t border-neutral-700">
                    {story?.summary || (
                        <span className="text-sm font-sfl text-neutral-300">
                            No Summary
                        </span>
                    )}
                </p>
            </div>
            <Edit open={open} onClose={handleOpen} />
        </>
    );
};

export default Summary;
