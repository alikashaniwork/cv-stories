import { Skeleton } from "@mui/material";

export default function Loading() {
    return (
        <div className="*:my-1.5 flex-grow">
            <Skeleton
                width="100%"
                height="10px"
                variant="rounded"
                animation="wave"
                className="!bg-neutral-700 !rounded-xl"
            />
            <Skeleton
                width="60%"
                height="10px"
                variant="rounded"
                animation="wave"
                className="!bg-neutral-700 !rounded-xl"
            />
            <Skeleton
                width="60%"
                height="10px"
                variant="rounded"
                animation="wave"
                className="!bg-neutral-700 !rounded-xl"
            />
        </div>
    );
}
