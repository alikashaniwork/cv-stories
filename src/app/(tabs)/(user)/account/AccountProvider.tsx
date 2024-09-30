"use client";
import { logout } from "@/src/queries/user/account/logout";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { PropsWithChildren } from "react";

export default function AccountProvider({ children }: PropsWithChildren) {
    const { error } = useFetchUserDetails();
    if (error) logout();
    return <>{children}</>;
}
