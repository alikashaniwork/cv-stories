import Backdrop from "@/src/app/_components/modules/Backdrop";
import { createContext, FormEvent, useContext, useState } from "react";
import { Context } from "../../../../EditorProvider";
import Header from "./header/Header";

interface Props {
    onClose: () => void;
    open: boolean;
}

type FormData = {
    pageNumber: number;
    content: string;
};

type IContext = {
    data: FormData;
    setData: (data: FormData) => void;
    onChange: (e: FormEvent) => void;
};

export const NewPageContext = createContext({} as IContext);

const Container = ({ open, onClose }: Props) => {
    const { pages } = useContext(Context);
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
    const contextValues = {
        data,
        setData,
        onChange: handleChagne,
    };
    return (
        <Backdrop open={open} onClose={onClose}>
            <div className="w-[80vw] h-[95vh] bg-[#333]">
                <NewPageContext.Provider value={contextValues}>
                    <Header onClose={onClose} />
                    <textarea
                        className="w-full h-[calc(100%-48px)] text-2xl leading-10 bg-[unset] border-none p-[4%] px-[8%] placeholder:text-sm"
                        name="content"
                        placeholder="Content of the page ..."
                        value={data.content}
                        onChange={handleChagne}
                    />
                </NewPageContext.Provider>
            </div>
        </Backdrop>
    );
};

export default Container;
