"use client";

import Empty from "@/src/app/_components/modules/Empty";
import { Character } from "@/src/queries/story/Entities";
import { useContext, useState } from "react";
import { Context } from "../../../EditorProvider";
import Edit from "./menu/Edit";
import MenuContainer from "./menu/Menu";

const List = () => {
    const [openEdit, setOpenEdit] = useState(false);
    const [characterDetails, setCharacterDetails] = useState<Character>({
        name: "",
        about: "",
    });
    const handleOpen = (character: Character) => {
        setOpenEdit(!openEdit);
        setCharacterDetails(character);
    };
    const { characters } = useContext(Context);
    const limitedContent = (value: string): string => {
        return value.length > 200 ? `${value.slice(0, 200)} ...` : value;
    };
    return (
        <>
            <Empty
                message="No Character!"
                padding="20px"
                length={characters.length}
            />
            <ul className="grid grid-cols-2 gap-4 p-4">
                {characters.map((character, index) => (
                    <li key={index} className="h-32 bg-[#333] rounded-xl">
                        <div className="h-10 flex items-center justify-between px-4">
                            <p className="flex items-center font-sfr capitalize text-neutral-300 text-lg">
                                {character.name}
                            </p>

                            <MenuContainer
                                characterId={character._id!}
                                onOpen={() => handleOpen(character)}
                            />
                        </div>
                        <p className="w-full h-20 overflow-hidden text-ellipsis text-wrap px-4 pb-4 leading-7">
                            {limitedContent(character.about || "")}
                        </p>
                    </li>
                ))}
            </ul>
            <Edit
                character={characterDetails}
                open={openEdit}
                onClose={() => setOpenEdit(false)}
            />
        </>
    );
};

export default List;
