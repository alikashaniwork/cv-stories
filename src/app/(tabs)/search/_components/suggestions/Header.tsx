import { useSearchParams } from "next/navigation";
import Options from "./Options";

export default function Header() {
    const type = useSearchParams().get("type") || "stories";
    return (
        <div className="flex items-center justify-between mt-2">
            <p className="text-neutral-300 tracking-wide capitalize">
                Suggested {type}
            </p>
            <Options />
        </div>
    );
}
