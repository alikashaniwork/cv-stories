import CloseButton from "@/src/app/_components/modules/CloseButton";
import PageNumber from "./PageNumber";
import WordsNumber from "./WordsNumber";

const Header = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="h-12 flex items-center justify-between bg-[#393939] px-6 *:flex *:items-center *:flex-1">
            <div className="gap-8">
                <PageNumber />
                <WordsNumber />
            </div>

            <p className="justify-center font-sfb text-xl">Page Details</p>

            <div className="justify-end gap-6">
                <CloseButton onClose={onClose} />
            </div>
        </div>
    );
};

export default Header;
