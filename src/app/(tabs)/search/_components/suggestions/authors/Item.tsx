import { IUser } from "@/src/queries/user/Entities";
import Image from "next/image";
import Link from "next/link";

export default function Item({ author }: { author: IUser }) {
    return (
        <Link
            href={`/author/preview/${author._id}/${author.fullName}`}
            className="flex-col w-20 h-20 py-2 border-b border-neutral-700"
        >
            <Image
                width={200}
                height={300}
                src={author.photo}
                alt=""
                className="w-full h-full rounded-full object-cover"
                priority
            />
            <p>{author.fullName}</p>
        </Link>
    );
}
