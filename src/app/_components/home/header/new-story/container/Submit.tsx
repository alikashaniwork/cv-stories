import { CircularProgress } from "@mui/material";
import Image from "next/image";

const Submit = ({ data, isLoading }: { data: string; isLoading: boolean }) => {
    return (
        <button className="min-w-[60px] h-full" disabled={!data || isLoading}>
            {isLoading ? (
                <CircularProgress size={16} sx={{ color: "#ff0030" }} />
            ) : (
                <Image
                    width={23}
                    height={23}
                    src="/icons/arrow/arrow-right.png"
                    alt=""
                />
            )}
        </button>
    );
};

export default Submit;
