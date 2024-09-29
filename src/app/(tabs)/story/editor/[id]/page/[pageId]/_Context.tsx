"use client";
import { useParams } from "next/navigation";
import {
    createContext,
    FormEvent,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from "react";
import { Context as EditorContext } from "../../EditorProvider";

type FormData = {
    pageNumber: number;
    content: string;
};

type IContext = {
    data: FormData;
    setData: (data: FormData) => void;
    onChange: (e: FormEvent) => void;
};

export const Context = createContext({} as IContext);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const { pageId } = useParams<{ pageId: string }>();
    const { pages } = useContext(EditorContext);
    const currentPage = pages.find((p) => p._id === pageId);

    const [data, setData] = useState({
        pageNumber: pages.length! + 1 || 1,
        content: "",
    });

    const handleChagne = (e: FormEvent) => {
        const target = e.target as HTMLInputElement;
        setData({
            ...data,
            [target.name]: target.value,
        });
    };

    useEffect(() => {
        if (currentPage)
            setData({
                pageNumber: currentPage.pageNumber,
                content: currentPage.content,
            });
    }, [currentPage]);

    const contextValues = {
        data,
        setData,
        onChange: handleChagne,
    };
    return (
        <Context.Provider value={contextValues}>{children}</Context.Provider>
    );
};

export default ContextProvider;
