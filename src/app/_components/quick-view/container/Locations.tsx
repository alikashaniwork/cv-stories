import { useContext } from "react";
import { Context } from "./Container";

export default function Locations() {
    const { locations } = useContext(Context);
    return (
        <ul className="">
            <p className="font-sfl text-neutral-400 tracking-wider">
                Locations
            </p>
            {locations.map((character, index) => (
                <li key={index} className="py-1">
                    <p>{character.name}</p>
                    <p className="text-neutral-300 font-sft -mt-1">
                        {character.about ||
                            "asjf lwebfjlewbgflewbglewjnf wel bgwe gbfsjld cblqwdbwqldfbwq"}
                    </p>
                </li>
            ))}
        </ul>
    );
}
