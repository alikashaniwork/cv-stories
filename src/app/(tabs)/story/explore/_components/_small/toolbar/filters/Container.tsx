import Filters from "../../../filters/Filters";

const Container = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="!w-dvw max-h-[calc(100vh-100px)] overflow-y-auto pb-14 bg-[#282828] rounded-t-xl">
            <Filters />
            <div className="fixed bottom-0 left-0 z-10 flex items-center justify-center w-full h-14 p-1 bg-[#282828]">
                <button
                    className="bg-blue-600 text-white text-sm p-[6px] px-4 rounded-full"
                    onClick={onClose}
                >
                    Done
                </button>
            </div>
        </div>
    );
};

export default Container;
