"use client";
import { useContext } from "react";
import { Context } from "../_Context";

const Numbers = () => {
    const { stories } = useContext(Context);
    const short = stories.filter((s) => s.type === "Short Story");
    const series = stories.filter((s) => s.type === "Series");
    const novel = stories.filter((s) => s.type === "Novel");
    return (
        <div className="w-full flex items-center justify-between gap-2 mt-4 md:my-4 *:flex-1">
            <div className="flex flex-col items-center justify-center">
                <p className="uppercase text-[.85rem] text-neutral-300 tracking-[1px]">
                    Short
                </p>
                <p className="font-sfbold text-xl">{short.length || 0}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="uppercase text-[.85rem] text-neutral-300 tracking-[1px]">
                    Series
                </p>
                <p className="font-sfbold text-xl">{series.length || 0}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="uppercase text-[.85rem] text-neutral-300 tracking-[1px]">
                    Novel
                </p>
                <p className="font-sfbold text-xl">{novel.length || 0}</p>
            </div>
        </div>
    );
};

export default Numbers;
