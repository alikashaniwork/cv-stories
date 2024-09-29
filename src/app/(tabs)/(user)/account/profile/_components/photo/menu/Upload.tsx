import { useContext } from "react";
import { Context } from "../_Context";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";

export default function Upload() {
    const { onSubmit, onChange, photoUpload } = useContext(Context);
    const { data: user } = useFetchUserDetails();
    return (
        !photoUpload && (
            <form onSubmit={(e) => onSubmit(e)}>
                <label
                    htmlFor="photo"
                    className="w-full h-full flex items-center justify-between uppercase text-blue tracking-[1px] text-[.9rem]"
                >
                    {user?.photo ? "Edit" : "Add Photo"}
                </label>
                <input
                    hidden
                    type="file"
                    id="photo"
                    name="photo"
                    onChange={onChange}
                />
            </form>
        )
    );
}
