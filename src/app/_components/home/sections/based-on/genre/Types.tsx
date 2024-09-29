interface Props {
    type: string;
    onType: (value: string) => void;
}

export default function Types({ type, onType }: Props) {
    return (
        <div className="w-full md:w-[350px] px-4 lg:p-2 pb-0 md:p-0 mt-4  mx-auto">
            <ul className="relative w-full h-10 flex items-center justify-between gap-1 bg-neutral-800 rounded-xl md:rounded-2xl p-2 px-1 text-center font-sfr tracking-[.5px] *:w-1/3">
                <li>
                    <button
                        onClick={() => onType("short")}
                        className="justify-center w-full"
                    >
                        <p className="relative z-20 font-sfr text-[.92rem] text-neutral-200">
                            Short
                        </p>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => onType("series")}
                        className="justify-center w-full"
                    >
                        <p className="relative z-20 font-sfr text-[.92rem] text-neutral-200">
                            Series
                        </p>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => onType("novel")}
                        className="justify-center w-full"
                    >
                        <p className="relative z-20 font-sfr text-[.92rem] text-neutral-200">
                            Novel
                        </p>
                    </button>
                </li>
                <span
                    className={`!w-[calc(100%/3-4px)] h-[calc(100%-8px)] block absolute top-1/2 z-10 -translate-y-1/2 bg-[#444] rounded-[10px] md:rounded-xl ${
                        type === "short"
                            ? "translate-x-[0%]"
                            : type === "series"
                            ? "translate-x-[calc(100%+2px)]"
                            : type === "novel"
                            ? "translate-x-[calc(200%+4px)]"
                            : "translate-x-[0]"
                    } transition-all duration-300`}
                ></span>
            </ul>
        </div>
    );
}
