import { Skeleton } from "@mui/material";

export default function Loading() {
    return (
        <div className="h-[calc(100%-144px)] overflow-y-auto no-scrollbar pt-0">
            <div className="mt-2 flex items-center gap-2 *:flex-1">
                <Skeleton
                    width="50%"
                    height="36px"
                    variant="rounded"
                    animation="wave"
                    className="!bg-neutral-700/50 !rounded-xl"
                />
                <Skeleton
                    width="50%"
                    height="36px"
                    variant="rounded"
                    animation="wave"
                    className="!bg-neutral-700/50 !rounded-xl"
                />
            </div>
            <div className="mt-6">
                <Skeleton
                    width="100%"
                    height="48px"
                    variant="rounded"
                    animation="wave"
                    className="mt-1.5 !bg-neutral-700/50 !rounded-xl"
                />
                <Skeleton
                    width="100%"
                    height="48px"
                    variant="rounded"
                    animation="wave"
                    className="mt-1.5 !bg-neutral-700/50 !rounded-xl"
                />
            </div>
        </div>
    );
}
