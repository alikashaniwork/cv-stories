"use client";

import useFetchStoryDetails from "@/src/queries/story/editor/useFetchDetails";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import MenuContainer from "./Menu";
import New from "./footer/new/New";

const Header = () => {
    const { id } = useParams<{ id: string }>();
    const { data: story } = useFetchStoryDetails(id);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <header className="fixed top-0 z-10 w-full h-12 flex items-center justify-between bg-[#18181855] backdrop-blur-xl border-b border-[#181818] px-4 *:flex *:items-center *:flex-1">
                <div>
                    <Link
                        href="main"
                        className="w-[33px] h-[33px] bg-neutral-800 rounded-full pr-[2px]"
                    >
                        <Image
                            width={18}
                            height={18}
                            src="/icons/arrow/left-second.png"
                            alt=""
                        />
                    </Link>
                </div>
                <p className="justify-center tracking-wider font-sfb text-lg text-neutral-200">
                    Characters
                </p>
                <div className="justify-end gap-3">
                    <button
                        className="w-[33px] h-[33px] gap-2 bg-neutral-700 p-1 rounded-full"
                        onClick={handleOpen}
                    >
                        <Image
                            width={16.5}
                            height={16.5}
                            src="/icons/plus/white.png"
                            alt=""
                        />
                    </button>
                    {story?.characters.length! > 0 && <MenuContainer />}
                </div>
            </header>
            <New open={open} onClose={handleOpen} />
        </>
    );
};

export default Header;
