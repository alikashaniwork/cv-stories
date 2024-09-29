import Backdrop from "@/src/app/_components/modules/Backdrop";
import { Character } from "@/src/queries/story/Entities";
import { createContext, FormEvent, useEffect, useState } from "react";
import Header from "./header/Header";

interface Props {
    character: Character;
    onClose: () => void;
    open: boolean;
}

type IContext = {
    data: Character;
    setData: (data: Character) => void;
    onChange: (e: FormEvent) => void;
};

export const EditCharacterContext = createContext({} as IContext);

const Edit = ({ character, open, onClose }: Props) => {
    const [data, setData] = useState<Character>({
        name: character.name,
        about: character.about,
    });

    const handleChagne = (e: FormEvent) => {
        const target = e.target as HTMLInputElement;
        setData({
            ...data,
            [target.name]: target.value,
        });
    };

    useEffect(() => {
        setData({ ...character });
    }, [character]);

    const contextValues = {
        data,
        setData,
        onChange: handleChagne,
    };
    return (
        <Backdrop open={open} onClose={onClose}>
            <div className="w-[400px] h-[250px] bg-[#333]">
                <EditCharacterContext.Provider value={contextValues}>
                    <Header characterId={character._id!} onClose={onClose} />

                    <input
                        style={{
                            borderBottom: "1px solid #444",
                        }}
                        className="w-full h-14 text-2xl leading-10 bg-[unset] border-none rounded-none p-[4%] px-[8%]"
                        name="name"
                        type="text"
                        placeholder="Name of the character ..."
                        value={data.name}
                        onChange={handleChagne}
                    />

                    <textarea
                        className="w-full h-[calc(100%-104px)] text-2xl leading-10 bg-[unset] border-none p-[4%] px-[8%]"
                        name="about"
                        placeholder="About the character ..."
                        value={data.about}
                        onChange={handleChagne}
                    />
                </EditCharacterContext.Provider>
            </div>
        </Backdrop>
    );
};

export default Edit;
