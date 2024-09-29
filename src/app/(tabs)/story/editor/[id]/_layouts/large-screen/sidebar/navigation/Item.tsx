import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    title: string;
    href: string;
    isActive: boolean;
    children: ReactNode;
}

const Item = ({ title, href, isActive, children }: Props) => {
    return (
        <li>
            <Link
                href={href}
                className="justify-between p-4 border-b border-[#333]"
            >
                <div className="flex items-center gap-2">
                    {children}
                    <p className="text-neutral-200 tracking-[1.2px] uppercase font-sfr text-[.9rem]">
                        {title}
                    </p>
                </div>

                {!isActive && (
                    <Image
                        width={16}
                        height={16}
                        src="/icons/arrow/right-blue.png"
                        alt=""
                    />
                )}
            </Link>
        </li>
    );
};

export default Item;
