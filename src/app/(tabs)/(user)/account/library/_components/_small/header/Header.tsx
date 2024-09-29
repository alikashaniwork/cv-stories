import Options from "./Options";

export default function Header() {
    return (
        <header className="sticky top-0 z-10 h-12 flex items-center justify-between px-4 backdrop-blur-xl">
            <p className="text-2xl font-sfb tracking-wide">Library</p>
            <Options />
        </header>
    );
}
