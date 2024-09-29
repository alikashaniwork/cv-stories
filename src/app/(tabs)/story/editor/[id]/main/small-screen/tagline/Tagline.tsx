"use client";

import useFetchStoryDetails from "@/src/queries/story/editor/useFetchDetails";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import Edit from "./Edit";

export default function Tagline() {
    const { id } = useParams<{ id: string }>();
    const { data: story } = useFetchStoryDetails(id);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <button
                className="w-full min-h-20 justify-between bg-neutral-800 border-b border-neutral-700 py-2 px-7"
                onClick={handleOpen}
            >
                <div className="flex-grow flex flex-col items-start">
                    <p className="text-[.95rem] text-neutral-400 font-sfl tracking-wider">
                        Tagline
                    </p>
                    <p className="capitalize text-xl text-white text-left font-sfb">
                        {story?.tagline}
                    </p>
                </div>

                <Image
                    width={16}
                    height={16}
                    src="/icons/edit/blue.png"
                    alt=""
                />
            </button>
            <Edit open={open} onClose={handleOpen} />
        </>
    );
}
