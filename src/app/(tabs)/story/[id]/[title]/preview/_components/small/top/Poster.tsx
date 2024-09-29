import Image from "next/image";
import { useContext } from "react";
import { Context } from "../../../_Context";

const Poster = () => {
    const { poster } = useContext(Context);
    return (
        poster && (
            <Image
                width={1000}
                height={1000}
                src={poster}
                alt=""
                className="min-w-[140px] max-w-[140px] h-[170px] mx-auto object-cover rounded-xl"
            />
        )
    );
};

export default Poster;
