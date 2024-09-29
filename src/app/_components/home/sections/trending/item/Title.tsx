import { useContext } from "react";
import { Context } from "./Item";

const Title = () => {
    const { title } = useContext(Context);
    return (
        <p className="text-2xl lg:text-3xl text-white font-sfh uppercase overflow-hidden text-ellipsis text-nowrap">
            {title}
        </p>
    );
};

export default Title;
