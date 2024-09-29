"use client";
import { Story } from "@/src/queries/story/Entities";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import QuickView from "../../../quick-view/QuickView";
import Item from "./item/Item";
import styles from "./styles.module.css";

export default function List({ stories }: { stories: Story[] }) {
    const [activeIndex, setActiveIndex] = useState(0);

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

    const [isOpen, setIsOpen] = useState(false);
    const [storyID, setStoryID] = useState("");
    const handleOpenDetails = (id: string) => {
        setIsOpen(!isOpen);
        setStoryID(id);
    };

    return (
        <>
            <div
                ref={ref}
                className={`transition-all duration-500 ${
                    isActive
                        ? "opacity-1 translate-y-0"
                        : "opacity-0 translate-y-[30px]"
                }`}
            >
                <Swiper
                    className="navigation-swiper h-auto !max-h-[90vh] !pb-6 lg:!pb-0 lg:!px-[8%]"
                    slidesPerView={1}
                    spaceBetween={0}
                    speed={800}
                    navigation={true}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    onSlideChange={(swiper) =>
                        setActiveIndex(swiper.activeIndex)
                    }
                >
                    {stories?.map((story, index) => (
                        <SwiperSlide
                            key={story._id}
                            id={
                                activeIndex === index
                                    ? styles.active
                                    : styles.deactive
                            }
                            className={styles.slider}
                        >
                            <Item
                                story={story}
                                onOpenDetails={handleOpenDetails}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <QuickView
                isOpen={isOpen}
                onClose={() => handleOpenDetails("")}
                storyID={storyID}
            />
        </>
    );
}
