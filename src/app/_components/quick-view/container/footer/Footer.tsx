import Link from "next/link";
import Close from "./Close";
import Save from "./Save";
import { useContext } from "react";
import { Context } from "../Container";

export default function Footer({ onClose }: { onClose: () => void }) {
    const { _id, title } = useContext(Context);
    return (
        <div className="fixed bottom-0 left-0 w-full h-14 flex items-center justify-between px-4 backdrop-blur-lg border-t border-neutral-700 *:flex *:items-center *:flex-1">
            <Save />
            <div className="!flex-[2] justify-center">
                <Link
                    href={`/story/${_id}/${title}/reader`}
                    className="bg-blue text-white w-40 h-10 rounded-2xl"
                >
                    Reading
                </Link>
            </div>
            <Close onClose={onClose} />
        </div>
    );
}
