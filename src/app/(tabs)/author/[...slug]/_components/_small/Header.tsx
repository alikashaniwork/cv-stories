"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Header = () => {
    const lastPath = useSearchParams().get("lastPath") || "/";
    return (
        <div className="relative z-30 w-full h-12 flex items-center justify-between bg-[#10101055] border-b border-[#1f1f1faa] backdrop-blur-xl px-4 *:flex *:items-center *:flex-1">
            <div>
                <Link
                    href={lastPath}
                    className="w-[33px] h-[33px] bg-neutral-800 rounded-full pr-[2px]"
                >
                    <Image
                        width={19}
                        height={19}
                        src="/icons/arrow/left-second.png"
                        alt=""
                        className=""
                    />
                </Link>
            </div>
            <div className="justify-center capitalize font-sfl tracking-wider text-neutral-400">
                Author
            </div>
            <div className="justify-end"></div>
        </div>
    );
};

export default Header;
