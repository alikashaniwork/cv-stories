"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    href: string;
    title: string;
}

export default function ItemLink({ href, title, children }: Props) {
    const status = useSearchParams().get("status") || "";
    return (
        <Link
            href={href}
            className="h-12 justify-between mt-[6px] bg-neutral-800 p-3 rounded-2xl"
        >
            <div className="flex items-center gap-[6px] text-neutral-300 font-sfl capitalize tracking-wider text-[.95rem]">
                <div className="w-6 h-6 flex items-center justify-center">
                    {children}
                </div>
                {title}
            </div>
            {status !== title && title !== "dashboard" && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#999"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                    />
                </svg>
            )}
        </Link>
    );
}
