import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "./Container";
import Save from "./Save";

const Actions = () => {
    const { _id, title } = useContext(Context);
    return (
        <div>
            <Link
                className="mt-2 justify-between px-6 bg-blue font-sfr text-white rounded-2xl h-14 gap-3 tracking-[.5px] text-lg"
                href={`story/${_id}/${title}/reader`}
            >
                <span className="pt-[1px]">Reading</span>
                <Image
                    width={64}
                    height={64}
                    src="/icons/story/reading.png"
                    alt=""
                    className="w-6 h-6 object-contain"
                />
            </Link>
            <Link
                className="mt-2 justify-between px-6 border border-blue font-sfl rounded-2xl h-14 gap-3 tracking-[.5px]"
                href={`story/${_id}/${title}/preview`}
            >
                <span className="pt-[1px]">Learn More</span>
            </Link>
            <Save />
        </div>
    );
};

export default Actions;
