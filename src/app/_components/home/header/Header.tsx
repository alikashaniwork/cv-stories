import NewStory from "./new-story/NewStory";

export default function Header() {
    return (
        <div className="lg:hidden h-12 flex items-center justify-between px-4 border-b border-neutral-800/80">
            <p className="uppercase font-sfblack text-lg tracking-[1px] text-rose-500">
                Ceremony
            </p>
            <NewStory />
        </div>
    );
}
