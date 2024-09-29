import useEditCharacter from "@/src/queries/story/editor/character/useEdit";
import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../../../../EditorProvider";
import { EditCharacterContext } from "../Edit";

interface Props {
    characterId: string;
    onClose: () => void;
}

const Header = ({ characterId, onClose }: Props) => {
    const { _id } = useContext(Context);
    const { data } = useContext(EditCharacterContext);
    const create = useEditCharacter(_id, characterId);
    const { isPending } = create;
    return (
        <div className="h-12 flex items-center justify-between bg-[#393939] px-6 *:flex *:items-center *:flex-1">
            <div>
                <button>Cancel</button>
            </div>
            <div className="justify-center gap-4 font-sfr text-lg">
                Edit Character
            </div>
            <div className="justify-end">
                <button
                    className="gap-2"
                    onClick={() => create.mutate(data)}
                    disabled={!data.name || isPending}
                >
                    {isPending && <CircularProgress size={15} />}
                    Save
                </button>
            </div>
        </div>
    );
};

export default Header;
