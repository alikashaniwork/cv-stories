import { useContext } from "react";
import { Context } from "../_Context";
import { CircularProgress } from "@mui/material";

export default function Save() {
    const { onSubmit, isPending, isUploading, photoUpload } =
        useContext(Context);
    return (
        photoUpload && (
            <button
                className="gap-2 tracking-[.5px] text-[.95rem]"
                onClick={onSubmit}
                disabled={isUploading || isPending}
            >
                {(isUploading || isPending) && <CircularProgress size={14} />}
                Save
            </button>
        )
    );
}
