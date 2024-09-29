import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import BackdropForm from "@/src/app/_components/modules/BackdropForm";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import useCheckUsername from "@/src/queries/user/profile/username/useCheck";
import useEditUsername from "@/src/queries/user/profile/username/useEdit";
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
        user && setData(user.username);
    }, [user]);

    const edit = useEditUsername();

    const { isPending, isSuccess, error, data: resData, reset } = edit;

    useEffect(() => {
        edit.isSuccess && onClose();
    }, [edit.isSuccess]);

    const checkUsername = useCheckUsername();

    const {
        isPending: isPendingCheck,
        isSuccess: isSuccessCheck,
        reset: restCheck,
    } = checkUsername;

    const [username] = useDebounce(data, 750);

    useEffect(() => {
        user?.username !== data && username && checkUsername.mutate(username);
    }, [username]);

    useEffect(() => {
        isSuccess && restCheck;
    }, [isSuccess]);

    return (
        <>
            <BackdropForm
                isOpen={open}
                onClose={onClose}
                isLoading={isPending}
                submitTitle="Save"
                onSubmit={() => edit.mutate(data)}
                title="Edit Username"
            >
                <div className="p-5 !w-dvw md:!w-[350px]">
                    <label hidden htmlFor="username">
                        Username
                    </label>

                    <div className="relative flex items-center h-[52px] w-full">
                        <input
                            className="h-[52px] w-full bg-[#444] border-[#555] rounded-2xl px-4 text-lg"
                            type="text"
                            id="username"
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
                        {isSuccessCheck && <>Username is available</>}
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
