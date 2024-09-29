"use client";

import PageLoader from "@/src/app/_components/modules/PageLoader";
import useFetchStoryDetails from "@/src/queries/story/editor/useFetchDetails";
import { Story } from "@/src/queries/story/Entities";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { useParams, useRouter } from "next/navigation";
import { createContext, PropsWithChildren } from "react";

export const Context = createContext({} as Story);

const EditorProvider = ({ children }: PropsWithChildren) => {
    const { id } = useParams<{ id: string }>();

    const router = useRouter();
    const { isPending } = useFetchUserDetails();
    const { isPending: isPendingStory, data: story } = useFetchStoryDetails(id);

    if (isPending || isPendingStory) return <PageLoader />;
    if (!isPendingStory && !story) router.replace("/");
    if (!story) return null;

    return <Context.Provider value={story}>{children}</Context.Provider>;
};

export default EditorProvider;
