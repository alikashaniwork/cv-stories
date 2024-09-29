"use client";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "../../EditorProvider";

const Header = () => {
    const { type } = useContext(Context);
    return (
        <header className="fixed top-0 z-10 w-full h-12 flex items-center justify-between bg-[#18181855] backdrop-blur-xl border-b border-[#181818] px-4">
            <p className="capitalize tracking-wider font-sfb text-lg text-neutral-300">
                New {type} Story
            </p>
            <Link href="/" className="text-[.95rem] font-sfl tracking-[.5px]">
                Exit Editor
            </Link>
        </header>
    );
};

export default Header;
