"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { createPortal } from "react-dom";

const Categories = ({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const params = new URLSearchParams(searchParams.toString());
    const handleCategory = (value: string) => {
        params.delete("type");
        params.append("type", value);
        router.push(`?${params.toString()}`);
    };
    if (typeof document !== "undefined")
        return createPortal(
            <div
                className={`bg-[#0f0f0f] *:h-1/3 fixed top-12 w-full z-20 transition-all duration-300 overflow-hidden
                ${open ? "h-[150px] overflow-y-auto" : "h-0"}
                `}
            >
                <button
                    className="px-6 font-sfl border-b border-[#222] w-full tracking-[1.5px]"
                    onClick={() => {
                        handleCategory("short-story");
                        onClose();
                    }}
                >
                    Short Story
                </button>
                <button
                    className="px-6 font-sfl border-b border-[#222] w-full tracking-[1.5px]"
                    onClick={() => {
                        handleCategory("series");
                        onClose();
                    }}
                >
                    Series
                </button>
                <button
                    className="px-6 font-sfl border-b border-[#222] w-full tracking-[1.5px]"
                    onClick={() => {
                        handleCategory("novel");
                        onClose();
                    }}
                >
                    Novel
                </button>
            </div>,
            document.body
        );
};

export default Categories;
