import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "../../_Context";
import { useSearchParams } from "next/navigation";

const Header = () => {
    const { type } = useContext(Context);
    const lastPath = useSearchParams().get("lastPath") || "/story/explore";

    return (
        <header className="fixed top-0 left-0 z-10 w-full h-12 flex items-center justify-between px-4 bg-[#18181855] backdrop-blur-xl *:flex *:items-center *:flex-1">
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
            <p className="!flex-[3] justify-center text-[.95rem] font-sfbold uppercase tracking-[1.5px] text-neutral-400">
                {type}
            </p>
            <div className="justify-end"></div>
        </header>
    );
};

export default Header;
