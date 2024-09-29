import Empty from "@/src/app/_components/modules/Empty";
import { useContext } from "react";
import { Context } from "../../../../EditorProvider";

const Locations = () => {
    const { locations } = useContext(Context);
    return (
        <div className="py-2 border-b border-neutral-700">
            <p className="text-neutral-400 font-sfl tracking-wider">
                Locations
            </p>
            <Empty message="No Location!" length={locations.length} />
            <ul className="flex flex-col gap-1 py-1 pt-2">
                {locations.map((location) => (
                    <li
                        key={location._id}
                        className="pr-4 uppercase text-neutral-300 text-sm tracking-[1.2px]"
                    >
                        <p>{location.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Locations;
