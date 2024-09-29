"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import Edit from "./Edit";
import useFetchStoryDetails from "@/src/queries/story/editor/useFetchDetails";

const Genres = () => {
    const { id } = useParams<{ id: string }>();
    const { data: story } = useFetchStoryDetails(id);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <div className="border border-[#444] rounded-2xl mt-4">
                <div className="flex items-center justify-between py-3 px-4">
                    <p className="text-neutral-400 font-sfl tracking-[1px]">
                        Genres
                    </p>
                    <button
                        className="bg-neutral-800 p-[8px] rounded-full"
                        onClick={handleOpen}
                    >
                        <Image
                            width={18}
                            height={18}
                            src="/icons/plus/blue.png"
                            alt=""
                        />
                    </button>
                </div>
                <ul className="relative flex items-center flex-wrap gap-3 capitalize py-5 p-4 pr-10 leading-7 border-t border-neutral-800">
                    {story?.genres.length === 0 ? (
                        <span className="text-sm font-sfl text-neutral-300">
                            No Genres
                        </span>
                    ) : (
                        story?.genres.map((genre) => (
                            <li key={genre}>
                                <p className="uppercase text-[1.05rem] font-sfr tracking-[1.2px]">
                                    {genre}
                                </p>
                            </li>
                        ))
                    )}
                    {story?.genres.length! > 0 && (
                        <Image
                            width={18}
                            height={18}
                            src="/icons/check/green.png"
                            alt=""
                            className="absolute right-6"
                        />
                    )}
                </ul>
            </div>
            <Edit open={open} onClose={handleOpen} />
        </>
    );
};

export default Genres;
