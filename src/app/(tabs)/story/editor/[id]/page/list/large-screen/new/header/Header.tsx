import useCreatePage from "@/src/queries/story/editor/page/useCreate";
import { CircularProgress } from "@mui/material";
import { useContext, useEffect } from "react";
import { Context } from "../../../../../EditorProvider";
import { NewPageContext } from "../Container";
import PageNumber from "./PageNumber";
import WordsNumber from "./WordsNumber";

const Header = ({ onClose }: { onClose: () => void }) => {
    const { _id } = useContext(Context);
    const { data } = useContext(NewPageContext);
    const create = useCreatePage(_id);
    const { isPending, isSuccess } = create;
    useEffect(() => {
        isSuccess && onClose();
    }, [isSuccess]);
    return (
        <div className="h-12 flex items-center justify-between bg-[#393939] px-6 *:flex *:items-center *:flex-1">
            <div className="gap-8">
                <PageNumber />
                <WordsNumber />
            </div>

            <p className="justify-center font-sfb text-xl">New Page</p>

            <div className="justify-end gap-6">
                <button onClick={onClose}>Cancel</button>
                <button
                    className="gap-2 bg-blue text-white p-1 px-3 rounded-xl text-sm tracking-wide disabled:bg-neutral-600"
                    onClick={() => create.mutate(data)}
                    disabled={!data.content || isPending}
                >
                    {isPending && <CircularProgress size={15} />}
                    Done
                </button>
            </div>
        </div>
    );
};

export default Header;
