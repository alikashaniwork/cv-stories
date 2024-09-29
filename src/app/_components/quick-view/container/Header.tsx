import { useContext } from "react";
import CloseButton from "../../modules/CloseButton";
import { Context } from "./Container";
import Genres from "./Genres";

export default function Header({ onClose }: { onClose: () => void }) {
    const { title } = useContext(Context);
    return (
        <div className="sticky top-0 z-10 h-24 flex items-start justify-between py-4 px-6 bg-neutral-800 border-b border-neutral-700">
            <div className="flex flex-col items-start">
                <p className="text-3xl font-sfb">{title}</p>
                <Genres />
            </div>
            <CloseButton onClose={onClose} />
        </div>
    );
}
