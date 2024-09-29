"use client";
import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition,
} from "@headlessui/react";
import { usePathname, useSearchParams } from "next/navigation";
import SortLink from "./SortLink";

export default function SortOrder() {
    const sort = useSearchParams().get("sort") || "newest";
    const pathname = usePathname();
    return (
        <Popover className="relative">
            <PopoverButton className="gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    fill="#007aff"
                    className="bi bi-filter-circle"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M7 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
                </svg>
                <span className="text-[.9rem] text-[#007aff]">{sort}</span>
            </PopoverButton>

            <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <PopoverPanel className="absolute -right-6 top-5 z-10 mt-2 flex w-[250px] max-w-max px-4">
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <ul className="">
                            <li
                                // onClick={handleClose}
                                className="border-b border-b-[#cacaca]"
                            >
                                <SortLink option="Newest" />
                            </li>
                            <li
                                // onClick={handleClose}
                                className="border-b border-b-[#cacaca]"
                            >
                                <SortLink option="Oldest" />
                            </li>
                            <li
                                // onClick={handleClose}
                                className="border-b border-b-[#cacaca]"
                            >
                                <SortLink option="Most Popular" />
                            </li>
                            <li
                                // onClick={handleClose}
                                className="border-b border-b-[#cacaca]"
                            >
                                <SortLink option="Most Reading" />
                            </li>
                        </ul>
                    </div>
                </PopoverPanel>
            </Transition>
        </Popover>
    );
}
