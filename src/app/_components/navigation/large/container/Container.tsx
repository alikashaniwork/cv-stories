"use client";
import { Session } from "@/authentication";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { NavContext } from "../Context";
import Categories from "./categories/Categories";
import NewStory from "./new-story/NewStory";
import Search from "./search/Search";
import User from "./User";

const Container = ({ session }: { session: Session | null }) => {
    const { categoryOpen, accountOpen, bagOpen } = useContext(NavContext);
    const pathname = usePathname();
    const position =
        pathname.includes("/account") || pathname === "/"
            ? "fixed"
            : "relative";
    const isOpen = categoryOpen.length > 0 || accountOpen || bagOpen;
    const isHidden = pathname.includes("reader") || pathname.includes("editor");
    return (
        !isHidden && (
            <nav
                className={`hidden ${position} top-0 z-40 w-full h-12 lg:flex items-center justify-between transition-all duration-300 ${
                    isOpen ? "" : "bg-[#0a0a0a077]"
                } backdrop-blur-xl px-[5%] lg:px-[8%] *:h-full *:flex *:items-center *:flex-[2]`}
            >
                <div className="">
                    <Link
                        className="uppercase font-sfblack text-xl tracking-[1px] text-neutral-200"
                        href="/"
                    >
                        Ceremony
                    </Link>
                </div>
                <ul className="justify-center !flex-[6] gap-4">
                    <Categories />
                    <Search />
                </ul>
                <div className="!flex-[2] gap-4 justify-end">
                    <NewStory session={session} />
                    <User session={session} />
                </div>
            </nav>
        )
    );
};

export default Container;
