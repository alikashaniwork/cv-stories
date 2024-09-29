import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../_Context";

const Avatar = () => {
    const { data: user } = useFetchUserDetails();
    const { photoUpload } = useContext(Context);
    return (
        <Image
            width={512}
            height={512}
            src={photoUpload || user?.photo || ""}
            alt=""
            className="w-56 h-56 -mt-6 object-cover bg-[#333] border border-neutral-800 rounded-full"
        />
    );
};

export default Avatar;
