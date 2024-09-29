"use client";
import { useContext } from "react";
import { Context } from "../_Context";

const Name = () => {
    const { fullName } = useContext(Context);
    return (
        <p className="mt-2 md:m-0 font-sfbold text-xl text-neutral-200">
            {fullName}
        </p>
    );
};

export default Name;
