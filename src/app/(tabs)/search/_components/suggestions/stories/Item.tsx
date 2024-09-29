import { Story } from "@/src/queries/story/Entities";
import Image from "next/image";
import Link from "next/link";

export default function Item({ story }: { story: Story }) {
    return (
        <Link
            href={`/story/preview/${story._id}/${story.title}`}
            className="w-full h-24 justify-start gap-2 py-2 border-b border-neutral-800"
        >
            <Image
                width={200}
                height={300}
                src={story.poster}
                alt=""
                className="w-16 h-full rounded-2xl object-cover"
                priority
            />
            <div>
                <p className="text-neutral-300">{story.title}</p>
                <ul className="flex items-center gap-3 flex-wrap">
                    {story.genres.map((genre) => (
                        <li
                            key={genre}
                            className="text-sm text-neutral-500 font-sfl tracking-wider"
                        >
                            {genre}
                        </li>
                    ))}
                </ul>
            </div>
        </Link>
    );
}
