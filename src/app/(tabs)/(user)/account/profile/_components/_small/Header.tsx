import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 z-10 w-full h-12 flex items-center justify-between px-4 backdrop-blur-xl *:flex *:items-center *:flex-1">
            <div>
                <Link
                    href="dashboard"
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
            <p className="justify-center text-2xl font-sfb tracking-wide">
                Profile
            </p>
            <div></div>
        </header>
    );
}
