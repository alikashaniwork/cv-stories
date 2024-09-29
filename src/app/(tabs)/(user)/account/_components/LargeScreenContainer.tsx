"use client";
import Spinner from "@/src/app/_components/modules/spinner/Spinner";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { ReactNode } from "react";

const LargeScreenContainer = ({ children }: { children: ReactNode[] }) => {
    const { isPending } = useFetchUserDetails();
    return (
        <div className="hidden lg:block w-full h-[calc(100vh-64px)] bg-second-theme rounded-2xl overflow-hidden">
            <div className="sticky top-0 h-16 flex items-center justify-between gap-3 px-6 border-b border-neutral-800 *:flex *:items-center *:flex-1">
                {children[0]}
            </div>
            <div className="h-[calc(100%-64px)] overflow-y-auto">
                {isPending ? (
                    <div className="flex items-center justify-center p-10">
                        <Spinner />
                    </div>
                ) : (
                    children[1]
                )}
            </div>
        </div>
    );
};

export default LargeScreenContainer;
