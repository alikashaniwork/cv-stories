import { Skeleton } from "@mui/material";

export default function Loading() {
    return (
        <>
            <Skeleton
                width="100%"
                height="120px"
                variant="rounded"
                animation="wave"
                className="!bg-[#2a2a2a] !rounded-2xl"
            />
            <Skeleton
                width="100%"
                height="120px"
                variant="rounded"
                animation="wave"
                className="!bg-[#2a2a2a] !rounded-2xl"
            />
            <Skeleton
                width="100%"
                height="120px"
                variant="rounded"
                animation="wave"
                className="!bg-[#2a2a2a] !rounded-2xl"
            />
            <Skeleton
                width="100%"
                height="120px"
                variant="rounded"
                animation="wave"
                className="!bg-[#2a2a2a] !rounded-2xl"
            />
        </>
    );
}
