import { Story } from "@/src/queries/story/Entities";
import Image from "next/image";
import Link from "next/link";
import { createContext } from "react";
import Genre from "./Genre";
import RatingContainer from "./Rating";
import Save from "./Save";

export const Context = createContext({} as Story);

const Item = ({ story }: { story: Story }) => {
    const pathname = window.location.pathname;
    const search = window.location.search;
    const fullPath = `${pathname}${search}`;
    return (
        <Context.Provider value={story}>
            <li className="h-[160px] flex items-center justify-start bg-[#222] rounded-2xl overflow-hidden">
                <Link
                    href={`${story._id}/${story.title}/preview?lastPath=${fullPath}`}
                    className="min-w-[120px] max-w-[120px] h-full"
                >
                    <Image
                        width={200}
                        height={250}
                        src={story.poster}
                        alt=""
                        className="w-full h-full object-cover"
                        priority
                    />
                </Link>
                <div className="h-full flex flex-grow pt-3 pb-2 flex-col">
                    <Link
                        href={`${story._id}/${story.title}/preview`}
                        className="flex-grow flex-col justify-between items-start pb-1 px-3"
                    >
                        <div>
                            <p className="text-neutral-100 text-[1rem]">
                                {story.title}
                            </p>
                            <Genre />
                            <RatingContainer
                                reviews={66}
                                rating={story.rating}
                            />
                        </div>
                    </Link>
                    <Link
                        href={`/author/${story.user?._id}/${story.user?.fullName}`}
                        className="justify-start px-3 pb-1 *:text-neutral-400 *:font-sfl *:text-sm *:capitalize"
                    >
                        <span>By</span>
                        <span className="pl-1">Sara macron</span>
                    </Link>
                    <div className="h-8 flex items-center justify-between gap-1 px-2 pr-4 border-t border-[#222] pt-2">
                        <Link
                            href={`${story._id}/${story.title}/reader`}
                            className="w-16 text-white uppercase text-[.8rem] tracking-[1px] rounded-full h-7 bg-[#333]"
                        >
                            Read
                        </Link>
                        <Save />
                    </div>
                </div>
            </li>
        </Context.Provider>
    );
};

export default Item;
