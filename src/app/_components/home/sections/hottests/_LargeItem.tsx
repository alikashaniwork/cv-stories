import convertURLName from "@/src/utils/convertURLName";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Author from "./Author";
import { Context } from "./Container";
import Genres from "./Genres";

export default function LargeItem({ type }: { type: string }) {
    const { onOpenDetails, story } = useContext(Context);
    return (
        <div className="hidden w-full h-[60vh] lg:flex items-center bg-neutral-800 rounded-2xl">
            {story?.poster && (
                <Image
                    onClick={() => onOpenDetails(story?._id!)}
                    width={2000}
                    height={2500}
                    src={story?.poster}
                    alt={story?.title!}
                    className="min-w-[30vw] max-w-[30vw] h-full object-cover rounded-tl-xl rounded-bl-xl"
                    priority
                />
            )}
            <div className="w-full h-full flex flex-col justify-between p-8">
                <p className="h-24 flex flex-col justify-center font-sfb text-2xl tracking-wider text-neutral-400">
                    The Hottest
                    <span className="block text-4xl font-sfblack text-rose-500">
                        {type}
                    </span>
                </p>
                <div
                    className="w-[calc(100%-80px)] *:mb-4 first:*:mb-0"
                    onClick={() => onOpenDetails(story?._id!)}
                >
                    <p className="w-full overflow-hidden font-sfb text-3xl text-ellipsis text-nowrap ltr text-left">
                        {story?.title!}
                    </p>
                    <Genres />
                </div>
                <div className="h-20 flex items-center justify-between">
                    <Author />
                    <Link
                        href={`story/${story?._id!}/${convertURLName(
                            story?.title || ""
                        )}/reader`}
                        className="bg-blue mt-1 text-white p-[2px] tracking-wide px-3 text-sm font-sfl rounded-full"
                    >
                        Read
                    </Link>
                </div>
            </div>
        </div>
    );
}
