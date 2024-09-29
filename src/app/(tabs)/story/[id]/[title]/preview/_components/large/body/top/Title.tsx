import { useContext } from "react";
import { Context } from "../../../../_Context";

const Title = () => {
    const { title } = useContext(Context);
    return <p className="font-sfbold text-2xl">{title}</p>;
};

export default Title;
