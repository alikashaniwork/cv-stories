import Preview from "./preview/Preview";
import Publish from "./publish/Publish";

export default function Footer() {
    return (
        <div className="fixed bottom-0 left-0 z-10 w-full h-[54px] flex items-center gap-1.5 p-1.5 backdrop-blur-2xl *:w-1/2">
            <Publish />
            <Preview />
        </div>
    );
}
