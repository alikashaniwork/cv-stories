"use client";
import { useContext } from "react";
import { Context } from "../../_Context";

const WordsNumber = () => {
    const {
        data: { content },
    } = useContext(Context);
    const wordCount = content
        .split(/\s+/)
        .filter((word) => word.length > 0).length;
    return (
        <div className="flex items-center gap-2">
            <p className="uppercase text-[.82rem] tracking-[1.5px] text-neutral-400">
                Words
            </p>
            <p className="text-neutral-200">{wordCount}</p>
        </div>
    );
};

export default WordsNumber;
