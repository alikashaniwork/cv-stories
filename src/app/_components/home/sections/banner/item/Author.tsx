import Image from "next/image";
import Link from "next/link";

interface User {
    _id: string;
    fullName: string;
    photo: string;
}

const Author = ({ user }: { user?: User }) => {
    return (
        <Link
            // href={`author/${user?._id}/${user?.fullName}`}
            href={``}
            className="gap-2 py-4"
        >
            {user?.photo && (
                <Image
                    width={200}
                    height={200}
                    src={user?.photo || ""}
                    alt=""
                    className="w-[60px] h-[60px] object-cover rounded-full bg-neutral-800 border border-neutral-800"
                />
            )}
            <div>
                <p className="text-sm text-neutral-400 tracking-[1px]">
                    Created By
                </p>
                <p className="font-sfr text-neutral-300">
                    {user?.fullName || "Sara Jackson"}
                </p>
            </div>
        </Link>
    );
};

export default Author;
