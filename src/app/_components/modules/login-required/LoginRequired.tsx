"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ModalLarge from "../Modal";

interface Props {
    open: boolean;
    onClose: () => void;
}

const LoginRequired = ({ open, onClose }: Props) => {
    const pathname = usePathname();
    return (
        <ModalLarge open={open} onClose={onClose}>
            <div className="w-[300px] h-[100px] *:h-1/2 bg-[#333] rounded-2xl">
                <p className="flex items-center justify-center border-b border-[#444] text-lg tracking-[1px] text-neutral-200">
                    Please Sign In
                </p>
                <div className="flex items-center *:flex-1 *:h-full">
                    <Link
                        className="border-r border-[#444]"
                        href={`/signin?redirect=${pathname}`}
                    >
                        Sign In
                    </Link>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </ModalLarge>
    );
};

export default LoginRequired;
