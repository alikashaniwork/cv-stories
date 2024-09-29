import { genres } from "@/data/genres";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

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
        <div className="justify-evenly gap-4 !flex-[6]">
            {genres.map((genre, index) => (
                <li
                    key={index}
                    onClick={() => handleItem(genre)}
                    className={`uppercase text-sm  tracking-[1px] transition-all duration-300 cursor-pointer
                    ${
                        items.includes(genre)
                            ? "text-white"
                            : "text-neutral-500"
                    }    
                    `}
                >
                    {genre}
                </li>
            ))}
        </div>
    );
};

export default Genres;
