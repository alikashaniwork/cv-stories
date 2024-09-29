import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import Image from "next/image";

const Avatar = () => {
    const { data: user } = useFetchUserDetails();
    return (
        <Image
            width={512}
            height={512}
            src={user?.photo || ""}
            alt=""
            className="min-w-14 max-w-14 h-14 object-cover bg-neutral-900 border border-neutral-800 rounded-full"
        />
    );
};

export default Avatar;
