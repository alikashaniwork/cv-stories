import { useContext } from "react";
import { Context } from "./Container";
import Image from "next/image";

export default function Poster() {
    const { poster, title } = useContext(Context);
    return (
        poster && (
            <Image
                width={1000}
                height={1500}
                src={poster}
                alt={title}
                priority
                className="min-w-60 max-w-60 h-72 object-cover rounded-2xl"
            />
        )
    );
}
