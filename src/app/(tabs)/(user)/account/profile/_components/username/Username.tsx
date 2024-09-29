import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import Image from "next/image";
import { useState } from "react";
import Edit from "./Edit";

const Username = () => {
    const { data: user } = useFetchUserDetails();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <button
                onClick={handleOpen}
                className="w-full justify-between p-2 px-4 rounded-2xl bg-[#222]"
            >
                <div className="flex flex-col items-start">
                    <p className="text-[.82rem] text-neutral-400 font-sft tracking-[1px]">
                        Username
                    </p>
                    <p className="text-[1.05rem] text-neutral-300">
                        {user?.username || (
                            <span className="text-sm font-sft text-neutral-400 tracking-[.5px]">
                                Not added yet!
                            </span>
                        )}
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
};

export default Username;
