import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import useLatestVisitedStore from "../../../../../store";
import AuthorItem from "./Author";
import StoryItem from "./Story";

export default function List() {
    const list = useLatestVisitedStore((s) => s.list);
    return (
        <Swiper
            className="navigation-swiper !p-4 !py-2"
            id="homeLatestSwiper"
            speed={500}
            slidesPerView={"auto"}
            spaceBetween={10}
        >
            {list?.map((item) => (
                <SwiperSlide key={item._id} className="!w-36">
                    {item.fullName ? (
                        <AuthorItem item={item} />
                    ) : (
                        <StoryItem item={item} />
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
