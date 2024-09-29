import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    title: string;
    description?: string;
    href: string;
    children: ReactNode;
}

const Item = ({ title, description, href, children }: Props) => {
    return (
        <li>
            <Link
                href={href}
                className="h-14 justify-between p-3 mb-2 rounded-2xl bg-[#222] border border-[#333] shadow-sm shadow-black/70"
            >
                <div className="flex items-center gap-2  ">
                    {children}
                    <div>
                        <p className="text-neutral-200 tracking-[1px] font-sfr">
                            {title}
                        </p>
                        <p className="-mt-[2px] text-neutral-400 text-[.8rem] tracking-wider font-sft">
                            {description}
                        </p>
                    </div>
                </div>

                <Image
                    width={16}
                    height={16}
                    src="/icons/arrow/right-blue.png"
                    alt=""
                />
            </Link>
        </li>
    );
};

export default Item;
