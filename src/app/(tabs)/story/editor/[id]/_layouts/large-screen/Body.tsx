import { PropsWithChildren } from "react";

const Body = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex-grow bg-[#222] rounded-tl-xl rounded-bl-xl overflow-y-auto pb-20">
            {children}
        </div>
    );
};

export default Body;
