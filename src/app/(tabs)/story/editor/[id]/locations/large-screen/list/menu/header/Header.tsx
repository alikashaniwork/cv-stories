import useEditLocation from "@/src/queries/story/editor/location/useEdit";
import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../../../../EditorProvider";
import { EditLocationContext } from "../Edit";

interface Props {
    locationId: string;
    onClose: () => void;
}

const Header = ({ locationId, onClose }: Props) => {
    const { _id } = useContext(Context);
    const { data } = useContext(EditLocationContext);
    const edit = useEditLocation(_id, locationId);
    const { isPending } = edit;
    return (
        <div className="h-12 flex items-center justify-between bg-[#393939] px-6 *:flex *:items-center *:flex-1">
            <div>
                <button onClick={onClose}>Cancel</button>
            </div>
            <div className="justify-center gap-4 font-sfr text-lg">
                Edit Location
            </div>
            <div className="justify-end">
                <button
                    className="gap-2"
                    onClick={() => edit.mutate(data)}
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
