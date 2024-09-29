"use client";
import { genres } from "@/data/genres";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Genres = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [items, setItems] = useState<string[]>([]);
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams.toString());
    useEffect(() => {
        setItems(params.getAll("genres"));
    }, [searchParams]);
    const addItem = (value: string) => {
        router.push(`?genres=${value}&${params.toString()}`);
    };
    const removeItem = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        const newItems = params.getAll("genres").filter((i) => i !== value);
        params.delete("genres");
        newItems.forEach((i) => params.append("genres", i));
        router.push(`${pathname}?${params.toString()}`);
    };
    const handleItem = (value: string) => {
        if (items.includes(value)) {
            removeItem(value);
        } else {
            addItem(value);
        }
    };
    return (
        <Swiper
            style={{ padding: "8px 16px" }}
            slidesPerView={"auto"}
            spaceBetween={10}
        >
            {genres.map((genre, index) => (
                <SwiperSlide
                    key={index}
                    style={{ width: "auto" }}
                    onClick={() => handleItem(genre)}
                    className={`bg-[#222] font-sfl p-1 px-3 rounded-xl text-sm  tracking-[1px] transition-all duration-300
                    ${
                        items.includes(genre)
                            ? "text-white"
                            : "text-neutral-400"
                    }    
                    `}
                >
                    {genre}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Genres;
