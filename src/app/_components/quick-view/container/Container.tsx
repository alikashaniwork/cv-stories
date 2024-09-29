"use client";
import { Story } from "@/src/queries/story/Entities";
import useFetchStoryDetails from "@/src/queries/story/general/useFetchDetails";
import { createContext } from "react";
import Spinner from "../../modules/spinner/Spinner";
import Large from "./_Large";
import Small from "./_Small";

export const Context = createContext({} as Story);

export default function Container({
    onClose,
    storyID,
}: {
    onClose: () => void;
    storyID: string;
}) {
    const { data: story, isPending } = useFetchStoryDetails(storyID);
    if (isPending)
        return (
            <div className="w-full h-full flex items-center justify-center p-20">
                <Spinner />
            </div>
        );
    if (!story) return null;
    return (
        <Context.Provider value={story}>
            <div className="w-full lg:w-[80vw] xl:w-[60vw] h-[calc(100vh-90px)] lg:h-[90vh]">
                <Small onClose={onClose} />
                <Large onClose={onClose} />
            </div>
        </Context.Provider>
    );
}
