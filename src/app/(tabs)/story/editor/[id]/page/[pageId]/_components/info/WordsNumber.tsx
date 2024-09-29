"use client";
import { useContext } from "react";
import { Context } from "../../_Context";

export default function WordsNumber() {
    const {
        data: { content },
    } = useContext(Context);
    const wordCount = content
        .split(/\s+/)
        .filter((word) => word.length > 0).length;
    return (
        <div className="flex items-center gap-2">
            <p className="text-sm uppercase tracking-wider text-neutral-300">
                Words
            </p>
            <p className="bg-neutral-700 px-3 rounded-xl font-sfb">
                {wordCount}
            </p>
        </div>
    );
}
