"use client";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import Photo from "./photo/Photo";
import Loading from "./Loading";

const Top = () => {
    const { data: user, isPending } = useFetchUserDetails();
    return (
        <div className="h-20 flex items-center gap-4 p-4">
            <Photo />
            {isPending ? (
                <Loading />
            ) : (
                <div>
                    <p className="text-[.9rem] text-neutral-300">
                        {user?.fullName}
                    </p>
                    <p className="font-sfl tracking-[1px] text-sm text-neutral-300">
                        {user?.email}
                    </p>
                    <p className="font-sfl tracking-[1px] text-sm text-neutral-400">
                        @ {user?.username}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Top;
