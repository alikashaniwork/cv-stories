"use client";
import QuickView from "@/src/app/_components/quick-view/QuickView";
import { Story } from "@/src/queries/story/Entities";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
    type: string;
    stories: Story[];
}

export default function Container({ type, stories }: Props) {
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
                <p className="px-4 lg:px-[8%] text-xl lg:text-2xl text-pink-600 font-sfh tracking-wide uppercase">
                    Hot{" "}
                    <span className="block text-2xl lg:text-3xl text-neutral-300">
                        {type}
                    </span>
                </p>
                <Swiper
                    className="navigation-swiper !h-[260px] !px-4 lg:!px-[8%]"
                    slidesPerView={"auto"}
                    spaceBetween={0}
                    modules={[Navigation, Grid]}
                    grid={{ rows: 3 }}
                    navigation={true}
                    speed={800}
                >
                    {stories?.map((story) => (
                        <SwiperSlide key={story._id} className="!h-20 !w-72">
                            <div
                                className="h-full flex items-center gap-2 border-b border-neutral-800 m-2 my-3"
                                onClick={() => handleOpenDetails(story._id)}
                            >
                                {story.poster && (
                                    <Image
                                        width={1000}
                                        height={1500}
                                        src={story.poster}
                                        alt={story.title}
                                        priority
                                        className="min-w-[50px] max-w-[50px] h-16 object-cover rounded-lg"
                                    />
                                )}
                                <div className="w-full">
                                    <p className="w-[calc(100%-80px)] overflow-hidden font-sfl text-sm text-ellipsis text-nowrap ltr text-left">
                                        {story.title}
                                    </p>
                                    <ul className="flex items-center flex-wrap gap-[6px]">
                                        {story.genres.map((genre) => (
                                            <li
                                                key={genre}
                                                className="text-[.8rem] font-sfl text-neutral-500 tracking-wide"
                                            >
                                                {genre}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex items-center gap-1">
                                        <span className="text-[.75rem] text-neutral-500 font-sft tracking-wider">
                                            By
                                        </span>
                                        <p className="text-[.8rem] text-neutral-400 font-sfl">
                                            {story.user?.fullName}
                                        </p>
                                    </div>
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
