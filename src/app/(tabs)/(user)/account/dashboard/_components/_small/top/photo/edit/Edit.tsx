import { useContext, useEffect } from "react";
import Avatar from "./Avatar";
import Delete from "./Delete";
import Save from "./Save";
import Upload from "./Upload";
import { Context } from "../_Context";

export default function Edit({ onClose }: { onClose: () => void }) {
    const { isSuccess, reset, setPhotoUpload } = useContext(Context);
    useEffect(() => {
        if (isSuccess) {
            onClose();
            setPhotoUpload("");
        }
    }, [isSuccess]);
    const handleCancel = () => {
        setPhotoUpload("");
        onClose();
        reset();
    };
    return (
        <div className="w-full lg:w-[350px] h-[350px] flex flex-col items-center justify-between bg-neutral-800">
            <button
                className="mt-3 ml-auto mr-4 text-white"
                onClick={handleCancel}
            >
                Cancel
            </button>
            <Avatar />
            <div className="w-full min-h-12 flex items-center justify-between px-6 border-t border-neutral-700">
                <Upload />
                <div className="flex items-center gap-4">
                    <Save />
                    <Delete />
                </div>
            </div>
        </div>
    );
}
