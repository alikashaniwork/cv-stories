import { CircularProgress } from "@mui/material";

interface Props {
    fullName: string;
    isPending: boolean;
}
const Submit = ({ fullName, isPending }: Props) => {
    return (
        <button
            className="gap-2 m-4 mx-auto text-sm"
            disabled={!fullName || isPending}
        >
            {isPending && <CircularProgress size={15} />}
            Done
        </button>
    );
};

export default Submit;
