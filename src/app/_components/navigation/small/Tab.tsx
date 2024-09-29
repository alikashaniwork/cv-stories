"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    href: string;
    children: ReactNode;
}

const Tab = ({ href, children }: Props) => {
    return (
        <li className="w-full h-full flex items-center justify-center">
            <Link href={href} className="w-full h-full">
                <div className="relative w-10 flex items-center justify-center">
                    {children}
                </div>
            </Link>
        </li>
    );
};

export default Tab;
