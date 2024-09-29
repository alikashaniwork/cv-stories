"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "../../../EditorProvider";
import MenuContainer from "./Menu";

const Header = () => {
    const { _id, pages } = useContext(Context);
    return (
        <header className="fixed top-0 z-10 w-full h-12 flex items-center justify-between bg-[#18181855] backdrop-blur-xl border-b border-[#181818] px-4 *:flex *:items-center *:flex-1">
            <div>
                <Link
                    href={`/story/editor/${_id}/main`}
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
            <p className="justify-center tracking-wider font-sfb text-lg text-neutral-300">
                Pages
            </p>
            <div className="justify-end gap-3">
                <Link
                    className="w-[33px] h-[33px] gap-2 bg-neutral-700 p-1 rounded-full"
                    href="new"
                >
                    <Image
                        width={16.5}
                        height={16.5}
                        src="/icons/plus/white.png"
                        alt=""
                    />
                </Link>
                {pages.length! > 0 && <MenuContainer />}
            </div>
        </header>
    );
};

export default Header;
