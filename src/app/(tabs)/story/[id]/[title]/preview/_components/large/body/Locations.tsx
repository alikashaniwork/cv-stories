import Empty from "@/src/app/_components/modules/Empty";
import { useContext } from "react";
import { Context } from "../../../_Context";

const Locations = () => {
    const { locations } = useContext(Context);
    return (
        <div>
            <p className="font-sfl text-neutral-400 tracking-[1.2px]">
                Locations
            </p>
            <Empty message="No Location!" length={locations.length} />
            <ul className="flex flex-col gap-1 py-1">
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
