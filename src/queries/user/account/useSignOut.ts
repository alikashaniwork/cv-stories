"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { logout } from "./logout";

export default function useSignOut() {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            // فراخوانی اکشن سرور به صورت async
            await logout();
        },
        onSuccess: () => {
            // حذف کش کاربر
            queryClient.invalidateQueries({ queryKey: ["user-details"] });
            queryClient.clear();

            // رفرش صفحه بعد از logout
            router.refresh();
        },
        onError: (error) => {
            console.error("Logout failed:", error);
        },
    });
}
