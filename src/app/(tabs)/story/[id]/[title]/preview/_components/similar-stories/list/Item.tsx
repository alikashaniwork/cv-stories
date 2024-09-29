import { Story } from "@/src/queries/story/Entities";
import Image from "next/image";
import Link from "next/link";

export default function Item({ story }: { story: Story }) {
    return (
        <Link
            href={`/story/${story._id}/${story.title}/preview`}
            className="flex-col w-full h-64"
        >
            {story.poster && (
                <Image
                    width={200}
                    height={300}
                    src={story.poster}
                    alt=""
                    className="w-full h-full rounded-2xl object-cover"
                    priority
                />
            )}
        </Link>
    );
}
