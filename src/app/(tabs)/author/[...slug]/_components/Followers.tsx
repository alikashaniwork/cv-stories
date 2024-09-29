"use client";
import { useContext } from "react";
import { Context } from "../_Context";

const Followers = () => {
    const { followings } = useContext(Context);
    return (
        <div className="flex items-center justify-center gap-2">
            <p className="text-neutral-400 font-sft tracking-[1px]">
                Followers
            </p>
            <p>{followings.length}</p>
        </div>
    );
};

export default Followers;
