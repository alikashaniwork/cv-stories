"use client";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import Image from "next/image";
import { Context } from "./_Context";
import { useContext } from "react";

const Avatar = () => {
    const { photoUpload } = useContext(Context);
    const { data: user } = useFetchUserDetails();
    return (
        <Image
            width={512}
            height={512}
            src={photoUpload || user?.photo || ""}
            alt=""
            className="w-40 lg:w-56 h-40 lg:h-56 m-3 object-cover bg-neutral-700 border border-neutral-800 rounded-full"
        />
    );
};

export default Avatar;
