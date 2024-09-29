import Image from "next/image";
import { useState } from "react";
import Edit from "./Edit";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";

export default function Bio() {
    const { data: user } = useFetchUserDetails();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <button
                onClick={handleOpen}
                className="w-full min-h-14 justify-between p-2 px-4 rounded-2xl bg-[#222]"
            >
                <div className="flex flex-col items-start">
                    <p className="text-[.82rem] text-neutral-400 font-sft tracking-[1px]">
                        Biography
                    </p>
                    <p className="text-[.95rem] text-neutral-300 text-left">
                        {user?.bio || <span className="text-sm">No Bio!</span>}
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
