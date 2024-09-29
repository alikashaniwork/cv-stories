"use client";

import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import useEditPhoto from "@/src/queries/user/profile/photo/useEdit";
import {
    ChangeEvent,
    createContext,
    FormEvent,
    PropsWithChildren,
    useState,
} from "react";

type IContext = {
    isSuccess: boolean;
    isUploading: boolean;
    isPending: boolean;
    photoUpload: string;
    setPhotoUpload: (value: string) => void;
    onChange: (changeEvent: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent) => Promise<void>;
    reset: () => void;
};

export const Context = createContext({} as IContext);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const [isUploading, setIsUploading] = useState(false);

    const [photoUpload, setPhotoUpload] = useState("");

    const handleChangePhoto = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<any>) => {
            setPhotoUpload(e.target.result);
        };
        const files = changeEvent.target.files;
        reader.readAsDataURL(files![0]);
    };

    const editPhoto = useEditPhoto();

    const { isPending, isSuccess, error, data: resData, reset } = editPhoto;

    const handleSubmitPhoto = async (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", photoUpload);
        formData.append("upload_preset", "nextjsapp");

        let uploadedPhoto = { public_id: "", secure_url: "" };

        setIsUploading(true);
        try {
            uploadedPhoto = await fetch(
                "https://api.cloudinary.com/v1_1/phase-1/image/upload",
                {
                    method: "POST",
                    body: formData,
                }
            )
                .then((res) => res.json())
                .finally(() => setIsUploading(false));
        } catch (error) {
            console.log(error);
        }
        if (uploadedPhoto.public_id) {
            editPhoto.mutate({
                photo: uploadedPhoto.secure_url,
                cloudinary_id: uploadedPhoto.public_id,
            });
        }
    };

    const contextValues = {
        isSuccess,
        isUploading,
        isPending,
        photoUpload,
        setPhotoUpload,
        onChange: handleChangePhoto,
        onSubmit: handleSubmitPhoto,
        reset,
    };

    return (
        <Context.Provider value={contextValues}>
            {children}
            <ActionResponse
                success={isSuccess}
                error={error?.message || ""}
                message={resData || ""}
                reset={reset}
            />
        </Context.Provider>
    );
};

export default ContextProvider;
