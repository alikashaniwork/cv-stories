"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Header = () => {
    const searchParams = useSearchParams();
    const type = searchParams.get("type") || "Short Story";
    const convertedType = type.split("-").join(" ");
    const lastPath = searchParams.get("lastPath") || "categories";
    return (
        <div className="relative z-30 w-full h-12 flex items-center justify-between bg-[#10101055] border-b border-[#1f1f1faa] backdrop-blur-xl px-4 *:flex *:items-center *:flex-1">
            <div>
                <Link
                    href={lastPath}
                    className="bg-neutral-800 w-[33px] h-[33px] pr-[2px] rounded-full"
                >
                    <Image
                        width={20}
                        height={20}
                        src="/icons/arrow/left-second.png"
                        alt=""
                        className=""
                    />
                </Link>
            </div>
            <p className="!flex-[3] justify-center capitalize text-lg font-sfb tracking-wide text-neutral-300">
                {convertedType}
                {type === "novel" && "s"} {type !== "novel" && "Stories"}
            </p>
            <div className="justify-end"></div>
        </div>
    );
};

export default Header;
