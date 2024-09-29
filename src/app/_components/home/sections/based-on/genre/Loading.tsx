import { Skeleton } from "@mui/material";
import { SwiperSlide } from "swiper/react";

export default function Loading() {
    return (
        <>
            <SwiperSlide className="!w-36 !h-44">
                <Skeleton
                    width="144px"
                    height="176px"
                    variant="rounded"
                    animation="wave"
                    className="!bg-neutral-800 !rounded-xl"
                />
            </SwiperSlide>
            <SwiperSlide className="!w-36 !h-44">
                <Skeleton
                    width="144px"
                    height="176px"
                    variant="rounded"
                    animation="wave"
                    className="!bg-neutral-800 !rounded-xl"
                />
            </SwiperSlide>
            <SwiperSlide className="!w-36 !h-44">
                <Skeleton
                    width="144px"
                    height="176px"
                    variant="rounded"
                    animation="wave"
                    className="!bg-neutral-800 !rounded-xl"
                />
            </SwiperSlide>
            <SwiperSlide className="!w-36 !h-44">
                <Skeleton
                    width="144px"
                    height="176px"
                    variant="rounded"
                    animation="wave"
                    className="!bg-neutral-800 !rounded-xl"
                />
            </SwiperSlide>
            <SwiperSlide className="!w-36 !h-44">
                <Skeleton
                    width="144px"
                    height="176px"
                    variant="rounded"
                    animation="wave"
                    className="!bg-neutral-800 !rounded-xl"
                />
            </SwiperSlide>
        </>
    );
}
