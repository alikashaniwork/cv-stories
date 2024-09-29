import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Options() {
    const pathname = usePathname();
    const router = useRouter();
    const type = useSearchParams().get("type") || "story";
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const handleType = (value: string) => {
        params.delete("type");
        params.append("type", value);
        router.push(`${pathname}?${params.toString()}`);
    };
    return (
        <div className="flex items-center">
            {type === "authors" ? (
                <button onClick={() => handleType("stories")}>Stories</button>
            ) : (
                <button onClick={() => handleType("authors")}>Authors</button>
            )}
        </div>
    );
}
