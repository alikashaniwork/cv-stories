"use client";
import useFetchSimilarStories from "@/src/queries/story/general/useFetchSimilarList";
import { useContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Context } from "../../../_Context";
import Item from "./Item";

export default function List() {
    const { genres, type } = useContext(Context);
    const { data: stories } = useFetchSimilarStories({
        type,
        genres,
    });
    return (
        <Swiper
            className="navigation-swiper !px-6 !py-4"
            id="homeLatestSwiper"
            speed={500}
            slidesPerView={"auto"}
            spaceBetween={10}
            modules={[Navigation]}
            navigation={true}
        >
            {stories?.map((story) => (
                <SwiperSlide key={story._id} className="!w-52">
                    <Item story={story} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
