import APIClient from "@/src/queries/apiClient";
import { useMutation } from "@tanstack/react-query";
import { IUser } from "../Entities";

export default function useResetPassword() {
    const apiClient = new APIClient<{ email: string }, IUser>(
        "user/account/reset-password"
    );
    return useMutation({
        mutationFn: (email: string) => apiClient.post({ email }),
    });
}
