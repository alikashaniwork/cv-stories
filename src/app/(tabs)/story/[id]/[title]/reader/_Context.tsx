"use client";

import { Page } from "@/src/queries/story/Entities";
import useFetchStoryDetails from "@/src/queries/story/general/useFetchDetails";
import { useParams } from "next/navigation";
import { createContext, PropsWithChildren, useState } from "react";

type IContext = {
    title?: string;
    pages?: Page[];
    selectedPage: number;
    setSelectedPage: (value: number) => void;
    onSelect: (value: number) => void;
    pagesOpen: boolean;
    onOpen: () => void;
};

export const Context = createContext({} as IContext);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const { id } = useParams<{ id: string }>();
    const { data: story } = useFetchStoryDetails(id);
    const [pagesOpen, setPagesOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState(1);
    const handleSelectedPage = (page: number) => setSelectedPage(page);
    const contextValues = {
        title: story?.title,
        pages: story?.pages,
        selectedPage,
        setSelectedPage,
        onSelect: handleSelectedPage,
        pagesOpen,
        onOpen: () => setPagesOpen(!pagesOpen),
    };
    return (
        <Context.Provider value={contextValues}>{children}</Context.Provider>
    );
};

export default ContextProvider;
