"use client";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../../../EditorProvider";
import Actions from "./Actions";

const Poster = () => {
    const { poster } = useContext(Context);
    return (
        <form className="lg:flex-[2] flex flex-col items-center max-lg:border-t border-neutral-700 max-lg:bg-neutral-800/50 pt-5 py-4 lg:p-0">
            <Image
                width={1000}
                height={1000}
                src={poster || ""}
                alt="Poster"
                className="w-[220px] h-[250px] bg-neutral-800 border border-neutral-800 shadow-md shadow-[#0005] rounded-lg object-cover flex items-center justify-center text-[.75rem] text-neutral-600 font-sfl"
            />
            <Actions />
        </form>
    );
};

export default Poster;
