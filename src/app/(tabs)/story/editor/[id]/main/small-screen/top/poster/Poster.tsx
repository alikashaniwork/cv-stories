"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import { Context } from "../../../../EditorProvider";
import Edit from "./edit/Edit";

const Poster = () => {
    const { poster } = useContext(Context);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <div
                className="relative flex flex-col items-center"
                onClick={handleOpen}
            >
                <Image
                    width={512}
                    height={512}
                    src={poster || ""}
                    alt="Poster"
                    className="w-[100px] h-[115px] object-cover bg-neutral-900 border border-neutral-800 rounded-lg text-[.8rem] uppercase text-neutral-600 flex items-center justify-center font-sft tracking-[1px]"
                />

                <Image
                    width={20}
                    height={20}
                    src="/icons/plus/blue.png"
                    alt=""
                    className="w-7 h-7 absolute -bottom-[13px] bg-[#333] rounded-full p-[6px]"
                />
            </div>
            <Edit open={open} onClose={handleOpen} />
        </>
    );
};

export default Poster;
