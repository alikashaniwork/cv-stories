import { useContext } from "react";
import { Context } from "./Container";

export default function Characters() {
    const { characters } = useContext(Context);
    return (
        <ul className="">
            <p className="font-sfl text-neutral-400 tracking-wider">
                Characters
            </p>
            {characters.map((character, index) => (
                <li key={index} className="py-1">
                    <p>{character.name}</p>
                    <p className="text-neutral-300 font-sft -mt-1">
                        {character.about}
                    </p>
                </li>
            ))}
        </ul>
    );
}
