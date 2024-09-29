import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import Backdrop from "@/src/app/_components/modules/Backdrop";
import useCreateLocation from "@/src/queries/story/editor/location/useCreate";
import { Location } from "@/src/queries/story/Entities";
import { createContext, FormEvent, useContext, useState } from "react";
import { Context } from "../../../EditorProvider";
import Header from "./header/Header";

interface Props {
    onClose: () => void;
    open: boolean;
}

type IContext = {
    data: Location;
    setData: (data: Location) => void;
    onChange: (e: FormEvent) => void;
};

export const NewLocationContext = createContext({} as IContext);

const Container = ({ open, onClose }: Props) => {
    const [data, setData] = useState<Location>({
        name: "",
        about: "",
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

    const { _id } = useContext(Context);

    const create = useCreateLocation(_id);
    const { isSuccess, error, data: resData, reset } = create;

    return (
        <>
            <Backdrop open={open} onClose={onClose}>
                <div className="w-[400px] h-[250px] bg-[#333]">
                    <NewLocationContext.Provider value={contextValues}>
                        <Header onClose={onClose} create={create} />

                        <input
                            style={{
                                borderBottom: "1px solid #444",
                            }}
                            className="w-full h-14 text-2xl leading-10 bg-[unset] border-none rounded-none p-[4%] px-[8%] placeholder:text-sm"
                            name="name"
                            type="text"
                            placeholder="Name of the location ..."
                            value={data.name}
                            onChange={handleChagne}
                        />

                        <textarea
                            className="w-full h-[calc(100%-104px)] text-2xl leading-10 bg-[unset] border-none p-[4%] px-[8%] placeholder:text-sm"
                            name="about"
                            placeholder="About the location ..."
                            value={data.about}
                            onChange={handleChagne}
                        />
                    </NewLocationContext.Provider>
                </div>
            </Backdrop>
            <ActionResponse
                success={isSuccess}
                error={error?.message || ""}
                message={resData || ""}
                reset={reset}
            />
        </>
    );
};

export default Container;
