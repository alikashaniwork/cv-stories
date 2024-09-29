"use client";

import { useSearchParams } from "next/navigation";
import Types from "../../Types";

export default function Header() {
    const status = useSearchParams().get("status") || "";
    return (
        <>
            <div className="flex-col !items-start">
                <p
                    className="
                text-neutral-100 capitalize text-[1.2rem] font-sfb 
                "
                >
                    Library
                </p>
                <p className="text-[1.05rem] capitalize tracking-wide font-sfl -mt-1 text-neutral-200">
                    {status.split("-").join(" ")} Stories
                </p>
            </div>
            <Types />
            <div />
        </>
    );
}
