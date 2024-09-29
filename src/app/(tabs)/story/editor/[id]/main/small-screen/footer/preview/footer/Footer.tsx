import Close from "./Close";
import Delete from "./Delete";

export default function Footer({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed bottom-0 left-0 z-10 w-full h-12 flex items-center justify-between px-4 backdrop-blur-xl border-t border-neutral-800">
            <Delete />
            <Close onClose={onClose} />
        </div>
    );
}
