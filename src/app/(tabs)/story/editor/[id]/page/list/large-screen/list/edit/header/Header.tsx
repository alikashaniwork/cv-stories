import useEditPage from "@/src/queries/story/editor/page/useEdit";
import { CircularProgress } from "@mui/material";
import { useContext, useEffect } from "react";
import { Context } from "../../../../../../EditorProvider";
import { NewPageContext } from "../Edit";
import PageNumber from "./PageNumber";
import WordsNumber from "./WordsNumber";

interface Props {
    onClose: () => void;
    pageId: string;
}

const Header = ({ pageId, onClose }: Props) => {
    const { _id } = useContext(Context);
    const { data } = useContext(NewPageContext);
    const edit = useEditPage(_id, pageId);
    const { isPending, isSuccess } = edit;
    useEffect(() => {
        isSuccess && onClose();
    }, [isSuccess]);
    return (
        <div className="h-12 flex items-center justify-between bg-[#393939] px-6 *:flex *:items-center *:flex-1">
            <div className="gap-8">
                <PageNumber />
                <WordsNumber />
            </div>

            <p className="justify-center font-sfb text-xl">Edit Page</p>

            <div className="justify-end gap-6">
                <button onClick={onClose}>Cancel</button>
                <button
                    className="gap-2 bg-blue text-white p-1 px-3 rounded-xl text-sm tracking-wide placeholder:bg-neutral-600"
                    onClick={() => edit.mutate(data)}
                    disabled={!data.content || isPending}
                >
                    {isPending && <CircularProgress size={15} />}
                    Save
                </button>
            </div>
        </div>
    );
};

export default Header;
