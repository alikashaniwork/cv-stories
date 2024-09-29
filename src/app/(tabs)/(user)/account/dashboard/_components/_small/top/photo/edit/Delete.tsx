import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import useDeletePhoto from "@/src/queries/user/profile/photo/useDelete";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { CircularProgress } from "@mui/material";
import Image from "next/image";

const Delete = () => {
    const { data: user } = useFetchUserDetails();
    const deletePhoto = useDeletePhoto();
    const { isPending, isSuccess, error, data: resData, reset } = deletePhoto;
    return (
        user?.photo && (
            <>
                <button
                    onClick={() => deletePhoto.mutate()}
                    className=""
                    disabled={isPending}
                >
                    {isPending ? (
                        <CircularProgress size={15} sx={{ color: "#ff5555" }} />
                    ) : (
                        <Image
                            width={20}
                            height={20}
                            src="/icons/trash/gray-2.png"
                            alt=""
                        />
                    )}
                </button>
                <ActionResponse
                    success={isSuccess}
                    error={error?.message || ""}
                    message={resData || ""}
                    reset={reset}
                />
            </>
        )
    );
};

export default Delete;