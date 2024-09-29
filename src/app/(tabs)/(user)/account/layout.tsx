import { PropsWithChildren } from "react";
import Sidebar from "./_components/sidebar/Sidebar";
import CompleteRegister from "./_components/complete-register/CompleteRegister";

const AccountLayout = async ({ children }: PropsWithChildren) => {
    return (
        <div className="flex lg:gap-2 lg:pt-14 lg:p-2 overflow-x-hidden">
            <Sidebar />
            <div className="w-full">{children}</div>
            <CompleteRegister />
        </div>
    );
};

export default AccountLayout;
