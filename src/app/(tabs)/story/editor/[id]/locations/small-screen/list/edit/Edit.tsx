import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import Backdrop from "@/src/app/_components/modules/Backdrop";
import useEditCharacter from "@/src/queries/story/editor/character/useEdit";
import useFetchStoryDetails from "@/src/queries/story/editor/useFetchDetails";
import { CircularProgress } from "@mui/material";
import { useParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

interface Props {
    locationId: string;
    open: boolean;
    onClose: () => void;
}

const Edit = ({ locationId, open, onClose }: Props) => {
    const { id } = useParams<{ id: string }>();
    const { data: story } = useFetchStoryDetails(id);
    const [data, setData] = useState({ name: "", about: "" });
    const handleChange = (e: FormEvent) => {
        const target = e.target as HTMLInputElement;
        setData({
            ...data,
            [target.name]: target.value,
        });
    };
    useEffect(() => {
        const currectLocation = story?.locations?.find(
            (c) => c._id!.toString() === locationId
        );
        currectLocation &&
            setData({
                name: currectLocation.name,
                about: currectLocation.about || "",
            });
    }, []);
    const edit = useEditCharacter(id, locationId);
    const { isPending, isSuccess, error, data: resData, reset } = edit;
    useEffect(() => {
        isSuccess && onClose();
    }, [isSuccess]);
    return (
        <>
            <Backdrop open={open} onClose={onClose}>
                <div className="w-full bg-neutral-900">
                    <div className="h-14 flex items-center justify-between px-5">
                        <p className="text-lg tracking-wide text-neutral-100">
                            Edit Character
                        </p>
                        <button onClick={onClose}>Cancel</button>
                    </div>
                    <form
                        className="pb-5 px-5"
                        onSubmit={(e) => {
                            e.preventDefault();
                            edit.mutate(data);
                        }}
                    >
                        <div className="flex items-center relative">
                            <label
                                className="absolute left-5 text-neutral-400 tracking-wide"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                className="w-full h-16 bg-[#222222] rounded-2xl pl-[74px] pr-10 text-xl capitalize"
                            />
                        </div>

                        <div className="bg-[#222222] p-4 rounded-2xl mt-4">
                            <label
                                className="block text-left text-neutral-400 tracking-wide"
                                htmlFor="about"
                            >
                                about
                            </label>
                            <input
                                type="text"
                                id="about"
                                name="about"
                                value={data.about}
                                onChange={handleChange}
                                className="w-full h-16 bg-[unset] border-none py-2 px-1 leading-7 capitalize"
                            />
                        </div>

                        <button
                            className="w-full h-12 gap-2 mt-4 bg-blue-600 rounded-2xl text-white disabled:bg-neutral-700"
                            disabled={isPending || !data.name}
                        >
                            {isPending && <CircularProgress size={15} />}
                            Save
                        </button>
                    </form>
                </div>
            </Backdrop>

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
