import { useContext } from "react";
import { Context } from "./Item";

const Heading = () => {
    const { type } = useContext(Context);
    return (
        <p className="px-1 lg:px-0 lg:py-4 uppercase font-sfblack lg:text-3xl tracking-[2px] text-rose-600">
            Trending {type}
        </p>
    );
};

export default Heading;
