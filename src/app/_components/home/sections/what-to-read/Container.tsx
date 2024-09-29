"use client";
import { useEffect, useRef, useState } from "react";
import { Story } from "@/src/queries/story/Entities";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import QuickView from "../../../quick-view/QuickView";
import Item from "./Item";

export default function Container({ stories }: { stories: Story[] }) {
    const ref = useRef<HTMLDivElement>(null);
    const el = ref.current;

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const elTop = el?.getBoundingClientRect().top || 0;
            if (elTop < window.innerHeight - 100) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [el]);

    const [storyID, setStoryID] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenDetails = (id: string) => {
        setIsOpen(true);
        setStoryID(id);
    };

    return (
        <div
            ref={ref}
            className={`my-[5vh] transition-all duration-[.8s] ease-out
            ${
                isActive
                    ? "opacity-1 translate-y-0"
                    : "opacity-0 translate-y-[60px]"
            } 
            `}
        >
            <p className="px-4 lg:px-[8%] mb-2 ml-1 text-purple-500 text-xl lg:text-2xl font-sfb tracking-wide capitalize">
                What To Read
            </p>

            <Swiper
                className="navigation-swiper !px-4 lg:!px-[8%]"
                slidesPerView={"auto"}
                spaceBetween={20}
                modules={[Navigation]}
                navigation={true}
                speed={500}
            >
                {stories?.map((story) => (
                    <SwiperSlide key={story._id} className="!w-[300px]">
                        <Item
                            key={story._id}
                            story={story}
                            onOpenDetails={handleOpenDetails}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <QuickView
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                storyID={storyID}
            />
        </div>
    );
}
