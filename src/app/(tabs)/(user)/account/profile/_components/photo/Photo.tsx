import ContextProvider from "./_Context";
import Avatar from "./Avatar";
import Menu from "./menu/Menu";

export default function Photo() {
    return (
        <ContextProvider>
            <div className="lg:h-[300px] flex flex-col items-center rounded-2xl bg-neutral-800">
                <Avatar />
                <Menu />
            </div>
        </ContextProvider>
    );
}
