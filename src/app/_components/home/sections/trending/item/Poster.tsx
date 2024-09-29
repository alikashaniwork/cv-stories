import Image from "next/image";
import { useContext } from "react";
import { Context } from "./Item";

const Poster = () => {
    const { poster, title } = useContext(Context);
    return (
        poster && (
            <Image
                width={2000}
                height={26000}
                src={poster}
                alt={title}
                priority
                className="w-[200px] h-[240px] lg:w-[400px] lg:h-[470px] object-cover rounded-xl"
            />
        )
    );
};

export default Poster;
