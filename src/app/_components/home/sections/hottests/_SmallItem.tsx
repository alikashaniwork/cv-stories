import convertURLName from "@/src/utils/convertURLName";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Context } from "./Container";

export default function SmallItem({ type }: { type: string }) {
    const { onOpenDetails, story } = useContext(Context);
    return (
        <div
            className="relative lg:hidden w-full h-full flex flex-col items-center"
            onClick={() => onOpenDetails(story?._id!)}
        >
            <div className="absolute top-0 w-full !h-[360px] p-4 py-2 flex items-start justify-between bg-gradient-to-b from-black/50 rounded-t-xl uppercase font-sfb tracking-wider text-rose-600">
                Hottest <span>{type}</span>
            </div>
            {story?.poster && (
                <Image
                    width={1000}
                    height={1500}
                    src={story?.poster}
                    alt={story?.title}
                    priority
                    className="w-full !h-auto object-cover rounded-xl"
                />
            )}

            <div className="absolute rounded-xl inset-0 w-full !h-auto lg:flex flex-col justify-end bg-gradient-to-t from-black/60" />

            <div className="absolute bottom-0 w-full !h-[360px] p-4 py-2 flex items-end justify-between">
                <div
                    className="w-[calc(100%-80px)]"
                    onClick={() => onOpenDetails(story?._id!)}
                >
                    <p className="w-full overflow-hidden font-sfl text-[.95rem] text-ellipsis text-nowrap ltr text-left">
                        {story?.title!}
                    </p>
                    <div className="flex items-center gap-1">
                        <span className="text-[.75rem] text-neutral-500 font-sft tracking-wider">
                            By
                        </span>
                        <p className="text-[.8rem] text-neutral-400 font-sfl">
                            {story?.user!?.fullName || "Sara Jackson"}
                        </p>
                    </div>
                </div>
                <Link
                    href={`story/${story?._id!}/${convertURLName(
                        story?.title || ""
                    )}/reader`}
                    className="absolute z-50 right-3 bottom-3 bg-blue mt-1 text-white p-[2px] tracking-wide px-3 text-sm font-sfl rounded-full"
                >
                    Read
                </Link>
            </div>
        </div>
    );
}
