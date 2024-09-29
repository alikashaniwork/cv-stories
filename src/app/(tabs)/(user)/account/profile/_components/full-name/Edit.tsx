import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import BackdropForm from "@/src/app/_components/modules/BackdropForm";
import useEditName from "@/src/queries/user/profile/useEditName";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { useEffect, useState } from "react";

interface Props {
    open: boolean;
    onClose: () => void;
}

const Edit = ({ open, onClose }: Props) => {
    const { data: user } = useFetchUserDetails();
    const [data, setData] = useState("");
    useEffect(() => {
        user && setData(user.fullName);
    }, [user]);
    const edit = useEditName();
    const { isPending, isSuccess, error, data: resData, reset } = edit;
    useEffect(() => {
        edit.isSuccess && onClose();
    }, [edit.isSuccess]);
    return (
        <>
            <BackdropForm
                isOpen={open}
                onClose={onClose}
                isLoading={isPending}
                submitTitle="Save"
                onSubmit={() => edit.mutate(data)}
                title="Edit Full Name"
            >
                <div className="p-4 py-8 !w-full md:!w-[350px]">
                    <label hidden htmlFor="fullName">
                        Full Name
                    </label>
                    <input
                        className="h-[52px] w-full bg-[#444] !border !border-[#555] rounded-2xl px-4 text-lg focus:!border-blue-500 transition-all duration-300"
                        type="text"
                        id="fullName"
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
};

export default Edit;
