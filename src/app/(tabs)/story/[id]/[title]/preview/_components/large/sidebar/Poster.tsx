import Image from "next/image";
import { useContext } from "react";
import { Context } from "../../../_Context";

const Poster = () => {
    const { poster } = useContext(Context);
    return (
        <Image
            width={1000}
            height={1000}
            src={poster}
            alt=""
            className="min-w-[240px] max-w-[240px] h-[280px] object-cover rounded-xl"
            priority
        />
    );
};

export default Poster;
