import { PropsWithChildren } from "react";
import CompleteRegister from "./_components/complete-register/CompleteRegister";
import Sidebar from "./_components/sidebar/Sidebar";
import AccountProvider from "./AccountProvider";

const AccountLayout = async ({ children }: PropsWithChildren) => {
    return (
        <AccountProvider>
            <div className="flex lg:gap-2 lg:pt-14 lg:p-2 overflow-x-hidden">
                <Sidebar />
                <div className="w-full">{children}</div>
                <CompleteRegister />
            </div>
        </AccountProvider>
    );
};

export default AccountLayout;
