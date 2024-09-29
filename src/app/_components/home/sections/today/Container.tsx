"use client";
import { Story } from "@/src/queries/story/Entities";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "./Heading";
import Title from "./Title";
import Genres from "./Genres";
import Author from "./Author";
import Summary from "./Summary";
import QuickView from "../../../quick-view/QuickView";

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
        <>
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
                <p className="px-4 lg:px-[8%] mb-2 ml-1 text-pink-600 text-xl lg:text-2xl font-sfb tracking-wide capitalize">
                    Reading Today
                </p>

                <Swiper
                    className="navigation-swiper !h-[500px] md:!h-[600px] lg:!h-[85vh] !px-4 lg:!px-[8%]"
                    slidesPerView={"auto"}
                    spaceBetween={10}
                    modules={[Navigation, Grid]}
                    grid={{ rows: 2 }}
                    navigation={true}
                    speed={500}
                >
                    {stories?.map((story) => (
                        <SwiperSlide
                            key={story._id}
                            className="!w-[160px] lg:!w-[50vw] !h-[200px] md:!h-[290px] lg:!h-[290px] bg-neutral-800 rounded-xl"
                        >
                            <div
                                className="w-full h-full flex flex-col items-center lg:flex-row"
                                onClick={() => handleOpenDetails(story._id)}
                            >
                                {story.poster && (
                                    <Image
                                        width={1000}
                                        height={1500}
                                        src={story.poster}
                                        alt={story.title}
                                        priority
                                        className="w-full lg:min-w-[250px] lg:max-w-[250px] h-full lg:h-full object-cover rounded-xl lg:rounded-bl-xl lg:rounded-tr-none lg:rounded-br-none"
                                    />
                                )}
                                <div className="hidden lg:block flex-grow lg:px-4">
                                    <Heading type={story.type} />

                                    <div className="py-4">
                                        <Title title={story.title} />
                                        <Genres genres={story.genres} />
                                    </div>

                                    <Author user={story.user} />
                                </div>
                            </div>
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
