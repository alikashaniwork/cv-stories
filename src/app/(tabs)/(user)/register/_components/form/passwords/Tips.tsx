interface Props {
    requirements: {
        minLength: boolean;
        hasUpperLower: boolean;
        hasNumber: boolean;
    };
    showTips: boolean;
}

export default function Tips({ showTips, requirements }: Props) {
    return (
        showTips && (
            <div className="absolute left-1/2 w-56 -translate-x-1/2 top-[74px] z-10 h-40 px-2 pt-1 text-neutral-400 font-sft text-[.8rem] tracking-[.8px]">
                <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-6 h-6 backdrop-blur-2xl border-l border-t border-neutral-500 transform rotate-45" />

                <div className="absolute w-full left-0 -top-[2px] p-4 rounded-2xl backdrop-blur-3xl border border-neutral-700/50">
                    <p className="text-white font-sfr text-sm">
                        Your Password must have:
                    </p>
                    <ul className="pt-1 *:py-2 *:border-b *:border-neutral-400/30">
                        <li
                            className={
                                requirements.minLength
                                    ? "text-green-500"
                                    : "text-red-500"
                            }
                        >
                            8 characters or more
                        </li>
                        <li
                            className={
                                requirements.hasUpperLower
                                    ? "text-green-500"
                                    : "text-red-500"
                            }
                        >
                            upper & lowercase letters
                        </li>
                        <li
                            className={
                                requirements.hasNumber
                                    ? "text-green-500"
                                    : "text-red-500"
                            }
                        >
                            at least one number
                        </li>
                    </ul>
                </div>
            </div>
        )
    );
}
