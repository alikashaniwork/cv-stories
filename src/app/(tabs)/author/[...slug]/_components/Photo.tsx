"use client";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../_Context";

const Photo = () => {
    const { photo } = useContext(Context);
    return (
        <Image
            width={512}
            height={512}
            src={photo}
            alt=""
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover bg-[#181818] border border-[#181818]"
        />
    );
};

export default Photo;
