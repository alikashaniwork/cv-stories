"use client";
import { Story } from "@/src/queries/story/Entities";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "./Item";
import "./styles.css";
import styles from "./styles.module.css";
import QuickView from "../../../quick-view/QuickView";

export default function Container({ stories }: { stories: Story[] }) {
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

    const [storyID, setStoryID] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenDetails = (id: string) => {
        setIsOpen(!isOpen);
        setStoryID(id);
    };
    return (
        <>
            <div
                className={`transition-all duration-[.8s] ease-out
            ${
                isActive
                    ? "opacity-1 translate-y-0"
                    : "opacity-0 translate-y-[60px]"
            } 
            `}
            >
                <Swiper
                    className="navigation-swiper !max-h-[300px] lg:!max-h-[90vh] !px-4 !pb-8 lg:!px-[8%]"
                    slidesPerView={2}
                    spaceBetween={15}
                    speed={800}
                    keyboard={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination, Keyboard]}
                    onSlideChange={(swiper) =>
                        setActiveIndex(swiper.activeIndex)
                    }
                >
                    {stories?.map((story, index) => (
                        <SwiperSlide
                            key={story._id}
                            id={
                                activeIndex === index &&
                                activeIndex === index + 1
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
