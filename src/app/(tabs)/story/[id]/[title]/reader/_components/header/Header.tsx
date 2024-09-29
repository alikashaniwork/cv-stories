"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";
import { Context } from "../../_Context";
import PagesList from "./PagesList";

const Header = () => {
    const lastPath = useSearchParams().get("lastPath");
    const { selectedPage, title, pages, onOpen } = useContext(Context);
    return (
        <>
            <header className="fixed top-0 left-0 z-10 w-full h-12 flex items-center justify-between px-4 md:px-[5%] lg:px-[8%] bg-[#18181855] backdrop-blur-xl *:flex *:items-center *:flex-1">
                <div>
                    <Link href={lastPath || "preview"}>
                        <Image
                            width={19.5}
                            height={19.5}
                            src="/icons/arrow/left-second.png"
                            alt=""
                        />
                    </Link>
                </div>
                <p className="!flex-[3] justify-center text-[.8rem] font-sfbold uppercase tracking-[1.5px] text-neutral-400">
                    {title}
                </p>
                <div className="justify-end">
                    <button onClick={onOpen} className="hidden md:flex gap-3">
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
                        <Image
                            width={18}
                            height={18}
                            src="/icons/story/list.png"
                            alt=""
                        />
                    </button>
                </div>
            </header>
            <PagesList />
        </>
    );
};

export default Header;
