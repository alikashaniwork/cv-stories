import { PropsWithChildren } from "react";
import Body from "./Body";
import Sidebar from "./sidebar/Sidebar";

const LargeScreen = ({ children }: PropsWithChildren) => {
    return (
        <>
            <div className="hidden lg:flex gap-2 h-[calc(100vh)] py-2">
                <Sidebar />
                <Body>{children}</Body>
            </div>
        </>
    );
};

export default LargeScreen;
