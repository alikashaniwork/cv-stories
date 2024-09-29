import Empty from "@/src/app/_components/modules/Empty";
import { useContext } from "react";
import { Context } from "../../../_Context";

const Characters = () => {
    const { characters } = useContext(Context);
    return (
        <div>
            <p className="font-sfl text-neutral-400 tracking-[1.2px]">
                Characters
            </p>
            <Empty message="No Character!" length={characters.length} />
            <ul className="flex flex-col gap-1 py-1">
                {characters.map((character) => (
                    <li
                        key={character._id}
                        className="pr-4 uppercase text-neutral-300 text-sm tracking-[1.2px]"
                    >
                        <p>{character.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Characters;
