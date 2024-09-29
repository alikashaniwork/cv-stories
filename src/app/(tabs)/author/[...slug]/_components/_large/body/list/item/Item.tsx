import { Story } from "@/src/queries/story/Entities";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext } from "react";
import Genre from "./Genre";
import RatingContainer from "./Rating";
import Save from "./Save";

export const Context = createContext({} as Story);

const Item = ({ story }: { story: Story }) => {
    const pathname = usePathname();
    return (
        <Context.Provider value={story}>
            <li className="h-[120px] md:h-[160px] flex items-center justify-start bg-[#333] rounded-2xl overflow-hidden">
                <Link
                    href={`/story/${story.title}/${story._id}/preview`}
                    className="min-w-[100px] max-w-[100px] md:min-w-[120px] md:max-w-[120px] h-full"
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
                        href={`/story/${story.title}/${story._id}/preview`}
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

                    <div className="h-8 flex items-center justify-between gap-1 px-2 pr-4 border-t border-[#444] pt-2">
                        <Link
                            href={`/story/${story.title}/${story._id}/reader?lastPath=${pathname}`}
                            className="bg-[#444] font-sfr w-16 text-white uppercase text-[.78rem] tracking-[1px] rounded-full h-7"
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
