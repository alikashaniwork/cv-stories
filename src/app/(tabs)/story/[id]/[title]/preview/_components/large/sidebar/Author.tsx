import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "../../../_Context";

const Author = () => {
    const { user } = useContext(Context);
    return (
        <Link
            className="my-3 w-full rounded-2xl justify-start gap-2"
            href={`/author/${user?._id}/${user?.fullName}`}
        >
            <Image
                width={60}
                height={60}
                src={user?.photo || "/author.jpg"}
                alt=""
                className="min-w-16 max-w-16 min-h-16 max-h-16 object-cover bg-[#222] rounded-full border border-[#222]"
            />
            <div className="flex-col flex justify-center h-full">
                <span className="text-sm text-neutral-400 font-sfl tracking-[1px]">
                    Author
                </span>
                <span className="text-neutral-300">{user?.fullName}</span>
            </div>
        </Link>
    );
};

export default Author;
