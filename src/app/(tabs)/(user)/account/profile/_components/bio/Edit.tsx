import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import BackdropForm from "@/src/app/_components/modules/BackdropForm";
import useEditBio from "@/src/queries/user/profile/useBio";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { useEffect, useState } from "react";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function Edit({ open, onClose }: Props) {
    const { data: user } = useFetchUserDetails();

    const [data, setData] = useState("");

    useEffect(() => {
        user && setData(user.bio);
    }, [user]);

    const edit = useEditBio();

    const { isPending, isSuccess, error, data: resData, reset } = edit;

    return (
        <>
            <BackdropForm
                isOpen={open}
                onClose={onClose}
                isLoading={isPending}
                submitTitle="Save"
                onSubmit={() =>
                    edit.mutate(data, {
                        onSuccess: () => onClose(),
                    })
                }
                title="Edit Biography"
            >
                <div className="p-4 !w-dvw md:!w-[350px]">
                    <label hidden htmlFor="bio">
                        Biography
                    </label>
                    <textarea
                        className="h-40 w-full bg-[#444] !border !border-[#555] rounded-2xl p-4 px-5 text-lg focus:!border-blue-500 transition-all duration-300"
                        id="bio"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                </div>
            </BackdropForm>
            <ActionResponse
                success={isSuccess}
                error={error?.message || ""}
                message={resData || ""}
                reset={reset}
            />
        </>
    );
}
