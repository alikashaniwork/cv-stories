import Backdrop from "@/src/app/_components/modules/Backdrop";
import { Location } from "@/src/queries/story/Entities";
import { createContext, FormEvent, useEffect, useState } from "react";
import Header from "./header/Header";

interface Props {
    location: Location;
    onClose: () => void;
    open: boolean;
}

type IContext = {
    data: Location;
    setData: (data: Location) => void;
    onChange: (e: FormEvent) => void;
};

export const EditLocationContext = createContext({} as IContext);

const Edit = ({ location, open, onClose }: Props) => {
    const [data, setData] = useState<Location>({
        name: location.name,
        about: location.about,
    });

    const handleChagne = (e: FormEvent) => {
        const target = e.target as HTMLInputElement;
        setData({
            ...data,
            [target.name]: target.value,
        });
    };

    useEffect(() => {
        setData({ ...location });
    }, [location]);

    const contextValues = {
        data,
        setData,
        onChange: handleChagne,
    };
    return (
        <Backdrop open={open} onClose={onClose}>
            <div className="w-[400px] h-[250px] bg-[#333]">
                <EditLocationContext.Provider value={contextValues}>
                    <Header locationId={location._id!} onClose={onClose} />

                    <input
                        style={{
                            borderBottom: "1px solid #444",
                        }}
                        className="w-full h-14 text-2xl leading-10 bg-[unset] border-none rounded-none p-[4%] px-[8%]"
                        name="name"
                        type="text"
                        placeholder="Name of the location ..."
                        value={data.name}
                        onChange={handleChagne}
                    />

                    <textarea
                        className="w-full h-[calc(100%-104px)] text-2xl leading-10 bg-[unset] border-none p-[4%] px-[8%]"
                        name="state"
                        placeholder="About the location ..."
                        value={data.about}
                        onChange={handleChagne}
                    />
                </EditLocationContext.Provider>
            </div>
        </Backdrop>
    );
};

export default Edit;
