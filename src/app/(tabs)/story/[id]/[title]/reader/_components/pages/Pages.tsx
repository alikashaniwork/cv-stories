"use client";
import { useCallback, useContext, useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Context } from "../../_Context";
import "./styles.css";

const Pages = () => {
    const swiperRef = useRef<any>(null);
    const { pages, selectedPage, setSelectedPage } = useContext(Context);
    const onSwiper = useCallback((swiper: any) => {
        swiperRef.current = swiper;
    }, []);
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(selectedPage - 1);
        }
    }, [selectedPage]);
    return (
        <div className="pt-12 h-[calc(100vh-40px)] md:h-[100vh]">
            <Swiper
                id="readerSwiper"
                onSwiper={onSwiper}
                slidesPerView={1}
                spaceBetween={"10%"}
                modules={[Navigation]}
                navigation={true}
                onSlideChange={(swiper) =>
                    setSelectedPage(swiper.activeIndex + 1)
                }
            >
                {pages?.map((page, index) => (
                    <SwiperSlide
                        className="no-scrollbar"
                        id="readerSwiperSlider"
                        key={index}
                    >
                        <p className="text-lg md:text-xl lg:text-2xl leading-8 lg:leading-[45px] md:leading-10">
                            {page.content}
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Pages;
