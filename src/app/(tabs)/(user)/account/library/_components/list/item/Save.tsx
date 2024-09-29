import useSave from "@/src/queries/story/library/useSave";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

const Save = ({ id }: { id: string }) => {
    const { data: user } = useFetchUserDetails();
    const alreadySaved = user?.saved?.find((s) => s === id);
    const save = useSave(id);
    const queryClient = useQueryClient();
    const handleSave = () => {
        if (alreadySaved) {
            const updatedUser = {
                ...user,
                saved: user?.saved?.filter((s) => s !== id),
            };
            queryClient.setQueryData(["user-details"], updatedUser);
        } else {
            const updatedUser = {
                ...user,
                saved: [id, ...(user?.saved || [])],
            };
            queryClient.setQueryData(["user-details"], updatedUser);
        }
        save.mutateAsync();
    };
    return (
        <button
            onClick={handleSave}
            className="bg-neutral-800 min-w-10 max-w-10 min-h-10 max-h-10 rounded-full"
        >
            {alreadySaved ? (
                <Image
                    width={20}
                    height={20}
                    src="/icons/story/bookmark-fill.png"
                    alt=""
                />
            ) : (
                <Image
                    width={20}
                    height={20}
                    src="/icons/story/bookmark.png"
                    alt=""
                />
            )}
        </button>
    );
};

export default Save;
