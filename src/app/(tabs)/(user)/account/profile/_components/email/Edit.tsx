import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import BackdropForm from "@/src/app/_components/modules/BackdropForm";
import useCheckEmail from "@/src/queries/user/account/register/useCheckEmail";
import useEditEmail from "@/src/queries/user/profile/email/useEdit";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

interface Props {
    open: boolean;
    onClose: () => void;
}

const Edit = ({ open, onClose }: Props) => {
    const { data: user } = useFetchUserDetails();

    const [data, setData] = useState("");

    useEffect(() => {
        user && setData(user.email);
    }, [user]);

    const checkEmail = useCheckEmail();

    const {
        isPending: isPendingCheck,
        isSuccess: isSuccessCheck,
        reset: restCheck,
    } = checkEmail;

    const [email] = useDebounce(data, 750);

    useEffect(() => {
        user?.email !== data && email && checkEmail.mutate(email);
    }, [email]);

    const edit = useEditEmail();

    const { isPending, isSuccess, error, data: resData, reset } = edit;

    useEffect(() => {
        edit.isSuccess && onClose();
    }, [edit.isSuccess]);

    useEffect(() => {
        isSuccess && restCheck;
    }, [isSuccess]);

    return (
        <>
            <BackdropForm
                isOpen={open}
                onClose={onClose}
                isLoading={isPending}
                submitTitle="Get Verification Link"
                onSubmit={() => edit.mutate(data)}
                title="Edit email"
            >
                <div className="p-5 !w-dvw md:!w-[350px]">
                    <label hidden htmlFor="email">
                        email
                    </label>

                    <div className="relative flex items-center h-[52px] w-full">
                        <input
                            className="h-[52px] w-full bg-[#444] border-[#555] rounded-2xl px-4 text-lg"
                            type="email"
                            id="email"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                        />
                        {isPendingCheck && (
                            <div className="w-4 h-4 absolute right-4 flex items-center justify-center">
                                <CircularProgress
                                    size={14}
                                    sx={{ color: "#00d166" }}
                                />
                            </div>
                        )}
                    </div>

                    <p className="flex items-center text-left pl-2 mt-1 text-green-400 text-[.8rem] tracking-[1px] w-full">
                        {isSuccessCheck && <>Email is available</>}
                    </p>
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
