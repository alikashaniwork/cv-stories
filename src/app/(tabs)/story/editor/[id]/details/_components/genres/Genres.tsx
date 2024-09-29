"use client";

import useFetchStoryDetails from "@/src/queries/story/editor/useFetchDetails";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import Edit from "./Edit";

const Genres = () => {
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
                        Genres
                    </p>
                    <Image
                        width={16}
                        height={16}
                        src="/icons/edit/blue.png"
                        alt=""
                    />
                </div>
                <ul className="flex items-center flex-wrap gap-2 pt-2 capitalize border-t border-neutral-700">
                    {story?.genres.length === 0 ? (
                        <span className="text-sm font-sfl text-neutral-300">
                            No Genres
                        </span>
                    ) : (
                        story?.genres.map((genre) => (
                            <li key={genre}>
                                <p>{genre}</p>
                            </li>
                        ))
                    )}
                </ul>
            </div>
            <Edit open={open} onClose={handleOpen} />
        </>
    );
};

export default Genres;
