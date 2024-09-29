import Image from "next/image";
import { useState } from "react";
import Edit from "./Edit";

export default function Password() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <button
                onClick={handleOpen}
                className="w-full h-14 justify-between p-2 px-4 rounded-2xl bg-[#222]"
            >
                <div className="flex flex-col items-start">
                    <p className="text-[.82rem] text-neutral-400 font-sft tracking-[1px]">
                        Password
                    </p>
                </div>
                <Image
                    width={16}
                    height={16}
                    src="/icons/edit/blue.png"
                    alt=""
                />
            </button>
            <Edit open={open} onClose={handleOpen} />
        </>
    );
}
