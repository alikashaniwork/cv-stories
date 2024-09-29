"use client";
import useDeletePoster from "@/src/queries/story/editor/poster/useDelete";
import useEditPoster from "@/src/queries/story/editor/poster/useEdit";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../EditorProvider";

export default function Actions() {
    const { _id, poster } = useContext(Context);

    const [isUploading, setIsUploading] = useState(false);

    const [newPhoto, setNewPhoto] = useState<File | null>(null);

    const deletePoster = useDeletePoster(_id);
    const { isPending: isPendingDelete } = deletePoster;

    const editPoster = useEditPoster(_id);
    const { isPending } = editPoster;

    const handleSubmitPhoto = async (newPhoto: File) => {
        const formData = new FormData();
        formData.append("file", newPhoto);
        formData.append("upload_preset", "nextjsapp");

        let uploadedPhoto = { public_id: "", secure_url: "" };

        try {
            setIsUploading(true);
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
            editPoster.mutate({
                photo: uploadedPhoto.secure_url,
                cloudinary_id: uploadedPhoto.public_id,
            });
        }
    };

    useEffect(() => {
        if (newPhoto !== null) handleSubmitPhoto(newPhoto);
    }, [newPhoto]);

    return (
        <div className="w-[220px] flex items-center justify-between px-1 mt-4">
            <input
                hidden
                type="file"
                id="photo"
                name="photo"
                onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                        setNewPhoto(e.target.files[0]);
                    }
                }}
            />

            {isPending || isUploading ? (
                <div className="flex items-center gap-2">
                    <CircularProgress size={15} />
                    <p className="text-neutral-300 font-sfl text-sm tracking-wide">
                        Uploading...
                    </p>
                </div>
            ) : (
                <label
                    htmlFor="photo"
                    className="flex items-center justify-center text-white bg-blue-600 tracking-wider"
                >
                    New Poster
                </label>
            )}

            {poster && (
                <button
                    type="button"
                    onClick={() => deletePoster.mutate()}
                    disabled={isPendingDelete}
                >
                    {isPendingDelete ? (
                        <CircularProgress size={15} sx={{ color: "#ff5555" }} />
                    ) : (
                        <Image
                            width={20}
                            height={20}
                            src="/icons/trash/w2.png"
                            alt=""
                        />
                    )}
                </button>
            )}
        </div>
    );
}
