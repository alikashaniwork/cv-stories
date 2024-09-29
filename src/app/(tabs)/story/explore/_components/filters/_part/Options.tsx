import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
    options: string[];
    title: string;
}

const Options = ({ options, title }: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [items, setItems] = useState<string[]>([]);
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams.toString());
    useEffect(() => {
        setItems(params.getAll(title));
    }, [searchParams]);
    const addItem = (value: string) => {
        router.push(`?${title}=${value}&${params.toString()}`);
    };
    const removeItem = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        const newItems = params.getAll(title).filter((i) => i !== value);
        params.delete(title);
        newItems.forEach((i) => params.append(title, i));
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
        <ul className="px-4 py-4 grid grid-cols-2 gap-4">
            {options.map((item, index) => (
                <li key={index}>
                    <button
                        onClick={() => handleItem(item || "")}
                        className={`w-full h-12 rounded-xl flex items-center justify-center border transition-all duration-300
                            ${
                                items.includes(item)
                                    ? "border-[#007aff]"
                                    : "border-[#333]"
                            }    
                            `}
                    >
                        <p className="text-[#ddd] tracking-[1px]">
                            {title === "Pages" && (
                                <span className="pr-1">+</span>
                            )}
                            {item}
                        </p>
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Options;
