import { CircularProgress } from "@mui/material";

interface Props {
    isSuccess: boolean;
    isPending: boolean;
}

export default function SubmitButton({ isSuccess, isPending }: Props) {
    return (
        isSuccess && (
            <button
                className="w-full h-12 mt-4 gap-2 rounded-2xl bg-blue text-white disabled:bg-neutral-700"
                disabled={isPending}
            >
                {isPending && <CircularProgress size={15} />}
                Create Account
            </button>
        )
    );
}
