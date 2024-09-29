import { Story } from "@/src/queries/story/Entities";
import Image from "next/image";
import Link from "next/link";

export default function StoryItem({ item }: { item: Story }) {
    return (
        <Link
            href={`/item/preview/${item._id}/${item.title}`}
            className="flex-col w-full h-48"
        >
            <Image
                width={200}
                height={300}
                src={item.poster}
                alt=""
                className="w-full h-full rounded-2xl object-cover"
                priority
            />
        </Link>
    );
}
