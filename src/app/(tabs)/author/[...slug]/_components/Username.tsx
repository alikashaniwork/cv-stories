"use client";
import { useContext } from "react";
import { Context } from "../_Context";

const Username = () => {
    const { username } = useContext(Context);
    return (
        <p className="text-neutral-400 font-sft tracking-[1px]">{username}</p>
    );
};

export default Username;
