import { useContext, useEffect } from "react";
import { Context } from "../_Context";

export default function Cancel() {
    const { isSuccess, reset, photoUpload, setPhotoUpload } =
        useContext(Context);

    useEffect(() => {
        isSuccess && setPhotoUpload("");
    }, [isSuccess]);

    const handleCancel = () => {
        setPhotoUpload("");
        reset();
    };

    return photoUpload && <button onClick={handleCancel}>Cancel</button>;
}
