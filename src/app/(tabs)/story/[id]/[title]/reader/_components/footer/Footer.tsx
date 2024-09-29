"use client";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../../_Context";
import dynamic from "next/dynamic";
const Pages = dynamic(() => import("./Pages"), { ssr: false });

const Footer = () => {
    const { selectedPage, pages, onOpen } = useContext(Context);
    return (
        <>
            <div className="w-full h-10 fixed bottom-0 z-20 flex items-center justify-between bg-[#2225] backdrop-blur-xl border-t border-[#282828dd] px-4 md:hidden">
                <button onClick={onOpen} className="gap-3">
                    <Image
                        width={18}
                        height={18}
                        src="/icons/story/list.png"
                        alt=""
                    />
                    <div className="flex items-center gap-2">
                        <p className="text-[#eee] text-[.98rem]">
                            {selectedPage}
                        </p>
                        <span className="text-[.8rem] font-sfl mt-[2px] text-neutral-500 tracking-[1px]">
                            OF
                        </span>
                        <p className="text-[#eee] text-[.98rem]">
                            {pages?.length}
                        </p>
                    </div>
                </button>
            </div>
            <Pages />
        </>
    );
};

export default Footer;
