import useFetchStoriesByGenre from "@/src/queries/story/general/landing/useFetchListByGenre";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Types from "./Types";
import QuickView from "@/src/app/_components/quick-view/QuickView";

interface Props {
    genre: string;
}

export default function Container({ genre }: Props) {
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

    const [type, setType] = useState("short");
    const { data: stories, isPending } = useFetchStoriesByGenre(genre, type);

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
                <p className="px-4 lg:px-[8%] mb-2 ml-1 text-xl lg:text-2xl font-sfb tracking-wide capitalize">
                    {genre}
                </p>

                <Swiper
                    className="navigation-swiper !h-[364px] !px-4 lg:!px-[8%]"
                    slidesPerView={"auto"}
                    spaceBetween={10}
                    modules={[Navigation, Grid]}
                    grid={{ rows: 2 }}
                    navigation={true}
                    speed={300}
                >
                    {isPending ? (
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
                        </>
                    ) : (
                        stories?.map((story) => (
                            <SwiperSlide
                                key={story._id}
                                className="!w-36 !h-44"
                            >
                                {story.poster && (
                                    <Image
                                        width={1000}
                                        height={1500}
                                        src={story.poster}
                                        alt={story.title}
                                        className="w-full h-full object-cover rounded-xl"
                                        onClick={() =>
                                            handleOpenDetails(story._id)
                                        }
                                        priority
                                    />
                                )}
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>

                <Types type={type} onType={(value: string) => setType(value)} />
            </div>
            <QuickView
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                storyID={storyID}
            />
        </>
    );
}
