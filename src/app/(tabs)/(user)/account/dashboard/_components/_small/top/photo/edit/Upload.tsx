import { useContext } from "react";
import { Context } from "../_Context";

export default function Upload() {
    const { onSubmit, onChange } = useContext(Context);
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <label
                htmlFor="photo"
                className="w-full h-full flex items-center justify-between text-blue tracking-[.5px] text-[.9rem]"
            >
                Choose Photo
            </label>
            <input
                hidden
                type="file"
                id="photo"
                name="photo"
                onChange={onChange}
            />
        </form>
    );
}
