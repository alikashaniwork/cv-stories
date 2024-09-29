import { Story } from "@/src/queries/story/Entities";
import convertURLName from "@/src/utils/convertURLName";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

interface Props {
    onOpenDetails: (id: string) => void;
    story: Story;
}

export default function Item({ onOpenDetails, story }: Props) {
    return (
        <div className="w-full h-full flex flex-col items-center">
            {story.poster && (
                <Image
                    onClick={() => onOpenDetails(story._id)}
                    width={1000}
                    height={1500}
                    src={story.poster}
                    alt={story.title}
                    className="w-full !h-[360px] object-cover rounded-xl"
                    priority
                />
            )}
            <div className="w-full flex items-center justify-between px-2 mt-2">
                <div
                    className="w-[calc(100%-80px)]"
                    onClick={() => onOpenDetails(story._id)}
                >
                    <p className="w-full overflow-hidden font-sfl text-[.95rem] text-ellipsis text-nowrap ltr text-left">
                        {story.title}
                    </p>
                    <ul className="flex items-center flex-wrap gap-[6px]">
                        {story.genres.map((genre) => (
                            <li
                                key={genre}
                                className="text-[.8rem] font-sfl text-neutral-500 tracking-wide"
                            >
                                {genre}
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-1">
                        <span className="text-[.75rem] text-neutral-500 font-sft tracking-wider">
                            By
                        </span>
                        <p className="text-[.8rem] text-neutral-400 font-sfl">
                            {story.user?.fullName}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1">
                        <p className="text-sm text-neutral-400 font-sfl">
                            {story.pages.length}
                        </p>
                        <span className="text-[.8rem] text-neutral-500 font-sfl uppercase tracking-[1px]">
                            Pages
                        </span>
                    </div>
                    <Link
                        href={`story/${story._id}/${convertURLName(
                            story.title
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
