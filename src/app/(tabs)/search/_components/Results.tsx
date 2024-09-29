"use client";

import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "../_Context";
import useSearch from "@/src/queries/search/useSearch";

const Results = () => {
    const { keyword, query } = useContext(Context);
    const { data, isPending } = useSearch(query);
    return (
        keyword && (
            <div className="w-full p-1 px-4 overflow-y-auto no-scrollbar">
                {isPending ? (
                    <div className="flex items-center justify-center mt-10">
                        <CircularProgress size={15} sx={{ color: "#888" }} />
                    </div>
                ) : (
                    <>
                        {keyword && (
                            <p className="text-[1.05rem] font-sfb text-neutral-400 tracking-wider mb-2">
                                Results
                            </p>
                        )}
                        <ul className="text-left">
                            {data?.stories?.map((story) => (
                                <li key={story._id}>
                                    <Link
                                        className="justify-start py-2 border-b border-[#333]"
                                        href={`/story/${story.title}/${story._id}/preview?query=${keyword}`}
                                    >
                                        <div className="flex items-center justify-start gap-2 ">
                                            <Image
                                                width={45}
                                                height={45}
                                                src={story.poster}
                                                alt={story.title || ""}
                                                className="min-w-[50px] max-w-[50px] h-[65px] object-cover bg-[#222] flex items-center justify-center text-[.75rem] text-neutral-600 font-sft rounded-lg"
                                            />
                                            <p className="text-[#aaa] font-sfl text-[.9rem] tracking-wide">
                                                {story.title}
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="text-left">
                            {data?.authors?.map((author) => (
                                <li key={author._id}>
                                    <Link
                                        className="justify-start py-2 border-b border-[#333]"
                                        href={`/author/${author._id}?query=${keyword}`}
                                    >
                                        <div className="flex items-center justify-start gap-2 ">
                                            <Image
                                                width={45}
                                                height={45}
                                                src={author.photo}
                                                alt={author.fullName || ""}
                                                className="min-w-[45px] max-w-[45px] h-[45px] rounded-full object-cover"
                                            />
                                            <p className="text-10 font-sfl text-[.9rem] tracking-wide">
                                                {author.fullName}
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        )
    );
};

export default Results;
