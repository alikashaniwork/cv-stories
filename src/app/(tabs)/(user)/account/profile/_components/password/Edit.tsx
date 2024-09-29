import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import BackdropForm from "@/src/app/_components/modules/BackdropForm";
import useEditName from "@/src/queries/user/profile/useEditName";
import useEditPassword from "@/src/queries/user/profile/useEditPassword";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { FormEvent, useEffect, useState } from "react";

interface Props {
    open: boolean;
    onClose: () => void;
}

const Edit = ({ open, onClose }: Props) => {
    const [data, setData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const handleChange = (e: FormEvent) => {
        const target = e.target as HTMLInputElement;
        setData({
            ...data,
            [target.name]: target.value,
        });
    };

    const edit = useEditPassword();

    const { isPending, isSuccess, error, data: resData, reset } = edit;

    // useEffect(() => {
    //     edit.isSuccess && onClose();
    // }, [edit.isSuccess]);

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
                title="Edit Password"
            >
                <div className="py-6">
                    <div className="px-4 py-2 !w-dvw md:!w-[350px]">
                        <label
                            className="ml-2 mb-1 block text-neutral-300"
                            htmlFor="newPassword"
                        >
                            New Password
                        </label>
                        <input
                            className="h-[52px] w-full bg-[#444] !border !border-[#555] rounded-2xl px-4 text-lg focus:!border-blue-500 transition-all duration-300"
                            id="newPassword"
                            type="password"
                            name="newPassword"
                            value={data.newPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="px-4 py-2 !w-dvw md:!w-[350px]">
                        <label
                            className="ml-2 mb-1 block text-neutral-300"
                            htmlFor="confirmPassword"
                        >
                            Confirm Password
                        </label>
                        <input
                            className="h-[52px] w-full bg-[#444] !border !border-[#555] rounded-2xl px-4 text-lg focus:!border-blue-500 transition-all duration-300"
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            value={data.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
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
