import Image from "next/image";
import { useContext } from "react";
import { Context } from "./Container";

export default function Author() {
    const { user } = useContext(Context);
    return (
        <div className="flex items-center gap-2">
            {user?.photo && (
                <Image
                    width={1000}
                    height={1500}
                    src={user?.photo}
                    alt={user?.fullName}
                    className="w-16 h-16 object-cover flex items-center justify-center text-[.7rem] font-sft text-neutral-500 rounded-full bg-neutral-600"
                />
            )}
            <div className="">
                <span className="text-sm text-neutral-400 font-sft tracking-wide">
                    Created By
                </span>
                <p className="-mt-[2px] text-neutral-200">
                    {user?.fullName || "Sara Jackson"}
                </p>
            </div>
        </div>
    );
}
