import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";

export default function MenuContainer() {
    return (
        <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-xl bg-slate-800 py-1.5 px-3 text-sm/6 font-sfr text-white shadow-inner shadow-black/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white transition-all duration-500">
                <Image
                    width={12}
                    height={12}
                    src="/icons/plus/white.png"
                    alt=""
                    priority
                />
                New
                <span className="hidden min-[992px]:block -ml-1">Story</span>
            </MenuButton>

            <MenuItems
                transition
                anchor="bottom end"
                className="w-52 !top-12 z-20 origin-top-right rounded-xl border border-white/5 backdrop-blur-2xl p-1 text-sm/6 text-white transition duration-300 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
                <MenuItem>
                    <button
                        className="group flex w-full items-center gap-2 rounded-xl text-[1rem] tracking-wide text-neutral-200 py-1.5 px-3 data-[focus]:bg-white/10 transition-all duration-300"
                        // onClick={() => onOpen("short")}
                    >
                        Short
                    </button>
                </MenuItem>
                <div className="my-1 h-px bg-white/5" />
                <MenuItem>
                    <button
                        className="group flex w-full items-center gap-2 rounded-xl text-[1rem] tracking-wide text-neutral-200 py-1.5 px-3 data-[focus]:bg-white/10 transition-all duration-300"
                        // onClick={() => onOpen("series")}
                    >
                        Series
                    </button>
                </MenuItem>
                <div className="my-1 h-px bg-white/5" />
                <MenuItem>
                    <button
                        className="group flex w-full items-center gap-2 rounded-xl text-[1rem] tracking-wide text-neutral-200 py-1.5 px-3 data-[focus]:bg-white/10 transition-all duration-300"
                        // onClick={() => onOpen("novel")}
                    >
                        Novel
                    </button>
                </MenuItem>
                <div className="my-1 h-px bg-white/5" />
                <MenuItem>
                    <button className="group flex w-full items-center gap-[2px] rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                        Choose From Drafts
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                            />
                        </svg>
                    </button>
                </MenuItem>
            </MenuItems>
        </Menu>
    );
}
