import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import BackdropForm from "@/src/app/_components/modules/BackdropForm";
import useEditSummary from "@/src/queries/story/editor/details/useEditSummary";
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
        story && setData(story.summary || "");
    }, [story]);
    const edit = useEditSummary(id);
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
                title="Edit Summary"
            >
                <div>
                    <label hidden htmlFor="Summary">
                        Summary
                    </label>
                    <textarea
                        className="w-full h-36 rounded-2xl p-3 px-5 mb-12 mt-4 leading-7 capitalize"
                        id="Summary"
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
