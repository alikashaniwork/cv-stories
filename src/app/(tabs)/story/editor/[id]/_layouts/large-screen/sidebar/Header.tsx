"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Header = () => {
    const lastPath = useSearchParams().get("lastPath") || "/";
    return (
        <div className="h-14 flex items-center justify-between bg-[#282828] px-4">
            <Link
                href={lastPath}
                className="gap-1 font-sfr tracking-wide text-[1.06rem]"
            >
                <Image
                    width={18}
                    height={18}
                    src="/icons/arrow/right-blue.png"
                    alt=""
                    className="rotate-180"
                />
                Exit Editor
            </Link>
        </div>
    );
};

export default Header;
