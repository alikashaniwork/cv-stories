import Image from "next/image";
import Link from "next/link";
import Save from "./Save";

const Actions = () => {
    return (
        <>
            <Link
                className="mt-4 justify-between px-6 bg-blue font-sfr text-white rounded-2xl h-14 gap-3 tracking-[.5px] text-lg"
                href="reader"
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
            <Save />
        </>
    );
};

export default Actions;
