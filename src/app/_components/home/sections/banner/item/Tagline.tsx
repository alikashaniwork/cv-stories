export default function Tagline({ tagline }: { tagline: string }) {
    return (
        <p className="text-sky-500 lg:text-xl">
            {tagline || "Welcome To Victory."}
        </p>
    );
}
