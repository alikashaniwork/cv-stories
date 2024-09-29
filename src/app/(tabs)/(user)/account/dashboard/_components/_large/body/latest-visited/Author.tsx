import { IUser } from "@/src/queries/user/Entities";
import Image from "next/image";
import Link from "next/link";

export default function AuthorItem({ item }: { item: IUser }) {
    return (
        <Link
            href={`/author/${item._id}/${item.fullName}`}
            className="flex-col w-44 h-44"
        >
            <Image
                width={200}
                height={300}
                src={item.photo}
                alt=""
                className="w-full h-full rounded-full object-cover"
                priority
            />
        </Link>
    );
}
