"use client";
import { Story } from "@/src/queries/story/Entities";
import Image from "next/image";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import QuickView from "../../../quick-view/QuickView";
import Item from "./item/Item";

export default function Container({ stories }: { stories: Story[] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [storyID, setStoryID] = useState("");
    const handleOpenDetails = (id: string) => {
        setIsOpen(!isOpen);
        setStoryID(id);
    };
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    return (
        <>
            <div className="px-4 lg:px-[8%] h-[540px] lg:h-[85vh]">
                <Swiper
                    className="!h-[424px] lg:!h-[calc(100%-220px)]"
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[Thumbs]}
                    speed={800}
                >
                    {stories?.map((story) => (
                        <SwiperSlide key={story._id} className="py-3 lg:py-6">
                            <Item
                                story={story}
                                onOpenDetails={handleOpenDetails}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    modules={[FreeMode, Navigation, Thumbs]}
                >
                    {stories?.map((story) => (
                        <SwiperSlide
                            key={story._id}
                            className="!w-24 lg:!w-44 !h-28 lg:!h-52"
                        >
                            <Image
                                width={1000}
                                height={1400}
                                src={story.poster}
                                alt=""
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <QuickView
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                storyID={storyID}
            />
        </>
    );
}
