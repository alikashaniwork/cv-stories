"use client";

import { useContext } from "react";
import { Context } from "../../_Context";

export default function PageNumber() {
    const { data } = useContext(Context);
    return (
        <div className="flex items-center gap-2">
            <p className="text-sm uppercase tracking-wider text-neutral-300">
                Page NO
            </p>
            <p className="bg-neutral-700 px-3 rounded-xl font-sfb">
                {data.pageNumber}
            </p>
        </div>
    );
}
