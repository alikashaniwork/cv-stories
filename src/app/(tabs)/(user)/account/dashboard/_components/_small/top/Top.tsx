"use client";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import Photo from "./photo/Photo";

const Top = () => {
    const { data: user } = useFetchUserDetails();
    return (
        <div className="flex items-center gap-4 p-4">
            <Photo />
            <div className="flex flex-col gap-[1.5px]">
                <p className="text-neutral-300">{user?.fullName}</p>
                <p className="font-sfl tracking-[1px] text-sm text-neutral-300">
                    {user?.email}
                </p>
                {user?.username && (
                    <p className="font-sfl tracking-[1px] text-sm text-neutral-400">
                        @ {user?.username}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Top;
