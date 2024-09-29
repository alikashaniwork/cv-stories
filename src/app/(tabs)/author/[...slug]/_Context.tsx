"use client";

import useFetchAuthorDetails from "@/src/queries/author/useFetchDetails";
import { IUser } from "@/src/queries/user/Entities";
import { useParams } from "next/navigation";
import { createContext, PropsWithChildren, useEffect } from "react";
import useLatestVisitedStore from "../../(user)/account/store";

export const Context = createContext({} as IUser);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const { slug } = useParams<{ slug: string[] }>();
    const { data: author } = useFetchAuthorDetails(slug[0]);
    const setAdd = useLatestVisitedStore((s) => s.setAdd);

    useEffect(() => {
        if (author) {
            setAdd({
                _id: author._id!,
                photo: author.photo!,
                fullName: author.fullName!,
            });
        }
    }, [author]);
    if (!author) return null;
    return <Context.Provider value={author}>{children}</Context.Provider>;
};

export default ContextProvider;
