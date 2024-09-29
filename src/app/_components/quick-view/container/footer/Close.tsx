import Image from "next/image";

export default function Close({ onClose }: { onClose: () => void }) {
    return (
        <div className="justify-end">
            <button
                className="w-9 h-9 pt-[2px] rounded-full bg-neutral-700"
                onClick={onClose}
            >
                <Image
                    width={21}
                    height={21}
                    src="/icons/arrow/right-gray.png"
                    alt=""
                    className="rotate-90"
                />
            </button>
        </div>
    );
}
