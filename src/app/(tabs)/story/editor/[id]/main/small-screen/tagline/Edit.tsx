import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import BackdropForm from "@/src/app/_components/modules/BackdropForm";
import useEditTagline from "@/src/queries/story/editor/details/useEditTagline";
import useFetchStoryDetails from "@/src/queries/story/editor/useFetchDetails";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
    open: boolean;
    onClose: () => void;
}

const Edit = ({ open, onClose }: Props) => {
    const { id } = useParams<{ id: string }>();
    const { data: story } = useFetchStoryDetails(id);

    const [data, setData] = useState("");

    useEffect(() => {
        story && setData(story.tagline);
    }, [story]);

    const edit = useEditTagline(id);
    const { isPending, isSuccess, error, data: resData, reset } = edit;

    return (
        <>
            <BackdropForm
                isOpen={open}
                onClose={onClose}
                isLoading={isPending}
                submitTitle="Save"
                onSubmit={() =>
                    edit.mutate(data, {
                        onSuccess: () => onClose(),
                    })
                }
                title="Edit taGline"
            >
                <div>
                    <label hidden htmlFor="tagline">
                        Tagline
                    </label>
                    <input
                        className="w-full h-16 rounded-2xl px-6  text-2xl capitalize"
                        id="tagline"
                        type="text"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
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
