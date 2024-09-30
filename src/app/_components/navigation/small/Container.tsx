"use client";
import { Session } from "@/authentication";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Tab from "./Tab";

const Container = ({ session }: { session: Session | null }) => {
    const pathname = usePathname();

    const isHidden =
        pathname.includes("editor") ||
        pathname.includes("preview") ||
        pathname.includes("reader");

    const isAccount =
        (pathname.includes("account") && !pathname.includes("library")) ||
        pathname.includes("register") ||
        pathname.includes("signin") ||
        pathname.includes("reset-passwor") ||
        pathname.includes("new-password");

    const isLibrary = pathname.includes("library");
    const isHome = pathname === "/";
    const isSearch = pathname === "/search";
    const isStories = pathname.includes("story");
    return (
        !isHidden && (
            <div className="lg:hidden w-full h-[45px] fixed bottom-0 left-0 z-20 bg-[#18181888] backdrop-blur-2xl *:flex-1">
                <ul className="h-full flex items-center justify-between">
                    <Tab href="/">
                        <Image
                            width={256}
                            height={256}
                            src={`/icons/nav/${
                                isHome ? "home-a.png" : "home.png"
                            }`}
                            alt=""
                            className="w-7 h-7 object-contain"
                        />
                    </Tab>
                    <Tab href="/story/categories">
                        <Image
                            width={256}
                            height={256}
                            src={`/icons/nav/${
                                isStories
                                    ? "categories-a.png"
                                    : "categories.png"
                            }`}
                            alt=""
                            className="w-[28px] h-[28px] object-contain"
                        />
                    </Tab>
                    <Tab href="/search">
                        <Image
                            width={256}
                            height={256}
                            src={`/icons/nav/${
                                isSearch ? "search-a.png" : "search.png"
                            }`}
                            alt=""
                            className="w-[23px] h-[23px] object-contain"
                        />
                    </Tab>
                    <Tab href="/account/library">
                        <Image
                            width={256}
                            height={256}
                            src={`/icons/nav/${
                                isLibrary ? "library-a.png" : "library.png"
                            }`}
                            alt=""
                            className="w-[26px] h-[26px] object-contain"
                        />
                    </Tab>
                    <Tab href={session ? "/account/dashboard" : "/signin"}>
                        <Image
                            width={256}
                            height={256}
                            src={`/icons/nav/${
                                isAccount ? "user-a.png" : "user.png"
                            }`}
                            alt=""
                            className="w-[30px] h-[30px] object-contain"
                        />
                    </Tab>
                </ul>
            </div>
        )
    );
};

export default Container;
