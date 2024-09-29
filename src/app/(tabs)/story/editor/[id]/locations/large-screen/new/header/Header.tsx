import { Location } from "@/src/queries/story/Entities";
import { CircularProgress } from "@mui/material";
import { UseMutationResult } from "@tanstack/react-query";
import { useContext } from "react";
import { NewLocationContext } from "../Container";

interface Props {
    onClose: () => void;
    create: UseMutationResult<string, Error, Location, unknown>;
}
const Header = ({ onClose, create }: Props) => {
    const { data } = useContext(NewLocationContext);
    return (
        <div className="h-12 flex items-center justify-between bg-[#393939] px-6 *:flex *:items-center *:flex-1">
            <div>
                <button onClick={onClose}>Cancel</button>
            </div>
            <div className="justify-center gap-4 font-sfr text-lg">
                New Location
            </div>
            <div className="justify-end">
                <button
                    className="gap-2"
                    onClick={() =>
                        create.mutate(data, {
                            onSuccess: () => onClose(),
                        })
                    }
                    disabled={!data.name || create.isPending}
                >
                    {create.isPending && <CircularProgress size={15} />}
                    Done
                </button>
            </div>
        </div>
    );
};

export default Header;
