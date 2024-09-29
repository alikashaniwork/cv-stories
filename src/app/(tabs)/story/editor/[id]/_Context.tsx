"use client";

import PageLoader from "@/src/app/_components/modules/PageLoader";
import useFetchStoryDetails from "@/src/queries/story/editor/useFetchDetails";
import { Story } from "@/src/queries/story/Entities";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { useParams } from "next/navigation";
import { createContext, PropsWithChildren } from "react";

export const Context = createContext({} as Story);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const { id } = useParams<{ id: string }>();
    const { isPending: isPendingStory, data: story } = useFetchStoryDetails(id);
    const { isPending } = useFetchUserDetails();
    if (isPendingStory) return <PageLoader />;
    return (
        <Context.Provider value={story || ({} as Story)}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
