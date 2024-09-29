import Image from "next/image";

interface User {
    _id: string;
    fullName: string;
    photo: string;
}

const Author = ({ user }: { user?: User }) => {
    return (
        <div className="mt-4">
            <p className="text-[.8rem] font-sfl text-neutral-400 tracking-[1px]">
                Created By
            </p>
            <p className="font-sfr text-neutral-300 -mt-1">
                {user?.fullName || "Sara Jackson"}
            </p>
        </div>
    );
};

export default Author;
