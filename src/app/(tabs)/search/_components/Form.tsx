"use client";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { Context } from "../_Context";

const Form = () => {
    const { keyword, setKeyword } = useContext(Context);
    const { replace } = useRouter();
    const pathname = usePathname();
    return (
        <form className="w-full fixed left-0 bottom-10 flex items-center p-2">
            <label hidden htmlFor="keyword">
                Title, Author, Genre, ...
            </label>
            <input
                className="w-full h-[44px] bg-neutral-800 shadow-sm shadow-[#44444466] !border border-neutral-600 rounded-2xl px-6 pr-12 placeholder:text-[1rem] placeholder:text-[#666666] backdrop-blur-lg border-none"
                id="keyword"
                type="text"
                name="keyword"
                placeholder="Search Stories and Authors ..."
                value={keyword}
                onChange={(e) => {
                    if (e.target.value === "") {
                        replace(`${pathname}`);
                    }
                    setKeyword(e.target.value);
                }}
            />
            {keyword && (
                <button
                    className="absolute right-6 bg-[#444] p-[2px] rounded-full"
                    onClick={() => {
                        setKeyword("");
                        replace(`${pathname}`);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#aaa"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </button>
            )}
        </form>
    );
};

export default Form;
