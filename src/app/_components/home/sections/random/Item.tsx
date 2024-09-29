import { Story } from "@/src/queries/story/Entities";
import Image from "next/image";
import Genres from "./Genres";
import Link from "next/link";

interface Props {
    onOpenDetails: (id: string) => void;
    story: Story;
}
export default function Item({ onOpenDetails, story }: Props) {
    const { _id, poster, title, tagline, genres } = story;
    return (
        <div className="relative">
            {poster && (
                <Image
                    width={1000}
                    height={1400}
                    src={poster}
                    alt={title}
                    priority
                    className="w-full h-[260px] lg:h-[85vh] object-cover"
                />
            )}

            <div className="hidden absolute inset-0 w-full h-full lg:flex flex-col justify-end bg-gradient-to-t from-black/80" />

            <div
                className="hidden absolute bottom-0 w-full h-full lg:flex items-end justify-between"
                onClick={() => onOpenDetails(_id)}
            >
                <div className="py-3 p-4">
                    <p className="mb-1 font-sfb text-2xl">{title}</p>
                    <p className="text-neutral-300">
                        {tagline || "Welcome To Victory."}
                    </p>
                </div>
                <div className="py-3 p-4 flex flex-col items-end gap-1">
                    <Genres genres={genres} />

                    <Link
                        className="w-20 bg-blue text-white p-1 rounded-full text-sm uppercase tracking-wider"
                        href={``}
                    >
                        Read
                    </Link>
                </div>
            </div>
        </div>
    );
}
