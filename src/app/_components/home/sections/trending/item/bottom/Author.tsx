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
            className="flex-col items-start"
        >
            <p className="text-[.8rem] font-sfl text-neutral-400 tracking-[1px]">
                Created By
            </p>
            <p className="font-sfr text-neutral-300">
                {user?.fullName || "Sara Jackson"}
            </p>
        </Link>
    );
};

export default Author;
