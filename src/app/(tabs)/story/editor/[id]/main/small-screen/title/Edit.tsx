import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import BackdropForm from "@/src/app/_components/modules/BackdropForm";
import useEditTitle from "@/src/queries/story/editor/details/useEditTitle";
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
        story && setData(story.title);
    }, [story]);

    const edit = useEditTitle(id);
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
                title="Edit Title"
            >
                <div>
                    <label hidden htmlFor="title">
                        Title
                    </label>
                    <input
                        className="w-full h-16 rounded-2xl px-6  text-2xl capitalize"
                        id="title"
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
