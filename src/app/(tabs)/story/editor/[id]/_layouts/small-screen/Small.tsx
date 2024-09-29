import { PropsWithChildren } from "react";

const SmallScreen = ({ children }: PropsWithChildren) => {
    return <div className="lg:hidden">{children}</div>;
};

export default SmallScreen;
