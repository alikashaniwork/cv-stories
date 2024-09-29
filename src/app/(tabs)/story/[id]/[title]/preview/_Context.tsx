"use client";

import useLatestVisitedStore from "@/src/app/(tabs)/(user)/account/store";
import { Story } from "@/src/queries/story/Entities";
import useFetchStoryDetails from "@/src/queries/story/general/useFetchDetails";
import { useParams } from "next/navigation";
import { createContext, PropsWithChildren, useEffect } from "react";

export const Context = createContext({} as Story);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const { id } = useParams<{ id: string }>();
    const { data: story } = useFetchStoryDetails(id);
    const setAdd = useLatestVisitedStore((s) => s.setAdd);

    useEffect(() => {
        if (story) {
            setAdd({
                _id: story._id!,
                poster: story.poster!,
                title: story.title!,
                genres: story.genres!,
                author: story.user?._id!,
            });
        }
    }, [story]);
    if (!story) return null;
    return <Context.Provider value={story}>{children}</Context.Provider>;
};

export default ContextProvider;
