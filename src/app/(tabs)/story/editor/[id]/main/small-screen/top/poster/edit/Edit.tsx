import Backdrop from "@/src/app/_components/modules/Backdrop";
import useDeletePoster from "@/src/queries/story/editor/poster/useDelete";
import useEditPoster from "@/src/queries/story/editor/poster/useEdit";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Context } from "../../../../../EditorProvider";

interface Props {
    open: boolean;
    onClose: () => void;
}

const Edit = ({ open, onClose }: Props) => {
    const { _id: id, poster } = useContext(Context);
    const [isLoading, setIsLoading] = useState(false);
    const [photoUpload, setPhotoUpload] = useState("");
    const handleChangePhoto = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<any>) => {
            setPhotoUpload(e.target.result);
        };
        const files = changeEvent.target.files;
        reader.readAsDataURL(files![0]);
    };

    const deletePoster = useDeletePoster(id);
    const { isPending: isPendingDelete } = deletePoster;

    const editPoster = useEditPoster(id);
    const { isPending } = editPoster;

    const handleSubmitPhoto = async (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", photoUpload);
        formData.append("upload_preset", "nextjsapp");

        let uploadedPhoto = { public_id: "", secure_url: "" };

        try {
            setIsLoading(true);
            uploadedPhoto = await fetch(
                "https://api.cloudinary.com/v1_1/phase-1/image/upload",
                {
                    method: "POST",
                    body: formData,
                }
            )
                .then((res) => res.json())
                .finally(() => setIsLoading(false));
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

    return (
        <Backdrop open={open} onClose={onClose}>
            <div className="w-full h-dvh overflow-y-auto pb-14 flex flex-col items-center justify-center p-2">
                <button
                    className="absolute top-4 right-5 bg-neutral-700 w-9 h-9 rounded-full"
                    onClick={() => {
                        onClose();
                        setPhotoUpload("");
                    }}
                >
                    <Image
                        width={15}
                        height={15}
                        src="/icons/close/gray.png"
                        alt=""
                    />
                </button>
                <form
                    className="flex-[2] flex flex-col items-center pl-4"
                    onSubmit={(e) => handleSubmitPhoto(e)}
                >
                    <Image
                        width={1000}
                        height={1000}
                        src={photoUpload || poster || ""}
                        alt=""
                        className="w-[220px] h-[250px] bg-neutral-800 border border-neutral-800 shadow-md shadow-[#1113] rounded-lg object-cover"
                    />

                    <input
                        hidden
                        type="file"
                        id="photo"
                        name="photo"
                        onChange={handleChangePhoto}
                    />

                    <div className="w-[220px] *:w-full px-1 mt-4 *:border *:border-[#333] *:h-12 *:rounded-xl">
                        {!photoUpload && (
                            <>
                                <label
                                    htmlFor="photo"
                                    className="flex items-center justify-center text-white bg-blue-600 tracking-wider"
                                >
                                    New Poster
                                </label>
                                {poster && (
                                    <button
                                        type="button"
                                        className="w-full gap-2 text-rose-500 tracking-wider mt-2"
                                        onClick={() => deletePoster.mutate()}
                                        disabled={isPendingDelete}
                                    >
                                        {isPendingDelete && (
                                            <CircularProgress
                                                size={15}
                                                sx={{ color: "#ff5555" }}
                                            />
                                        )}
                                        Remove
                                    </button>
                                )}
                            </>
                        )}
                        {photoUpload && (
                            <>
                                <button
                                    className="gap-2 bg-blue-800 text-white p-[6px] px-5 rounded-full font-sfl tracking-wider disabled:bg-neutral-700"
                                    disabled={isPending || isLoading}
                                >
                                    {(isPending || isLoading) && (
                                        <CircularProgress
                                            size={15}
                                            sx={{ color: "#0288e0" }}
                                        />
                                    )}
                                    Save
                                </button>
                                <button
                                    onClick={() => setPhotoUpload("")}
                                    className="mt-2"
                                >
                                    Cancel
                                </button>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </Backdrop>
    );
};

export default Edit;
