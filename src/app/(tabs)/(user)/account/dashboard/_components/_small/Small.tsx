"use client";
import dynamic from "next/dynamic";
import Actions from "./actions/Actions";
import LibraryMenu from "./library-menu/LibraryMenu";
import Top from "./top/Top";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import Spinner from "@/src/app/_components/modules/spinner/Spinner";
const LatestVisited = dynamic(() => import("./latest-visited/LatestVisited"), {
    ssr: false,
});

const Small = () => {
    const { isPending } = useFetchUserDetails();
    return (
        <div className="lg:hidden pb-20">
            {isPending ? (
                <div className="flex items-center justify-center p-10">
                    <Spinner />
                </div>
            ) : (
                <>
                    <Top />
                    <Actions />
                    <LibraryMenu />
                    <LatestVisited />
                </>
            )}
        </div>
    );
};

export default Small;
