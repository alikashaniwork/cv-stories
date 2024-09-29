"use client";
import { useContext } from "react";
import { Context } from "../_Context";

const Input = () => {
    const {
        data: { content },
        onChange,
    } = useContext(Context);
    return (
        <div className="h-[calc(100vh-96px)] px-2">
            <textarea
                className="w-full h-full bg-neutral-800 rounded-xl p-5 px-6 leading-8 text-[1.15rem] text-neutral-300 placeholder:text-base placeholder:font-sfl"
                placeholder="Content of the page ..."
                name="content"
                value={content}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
