import APIClient from "@/src/queries/apiClient";
import { useMutation } from "@tanstack/react-query";

export default function useCheckEmail() {
    const apiClient = new APIClient<{ email: string }, string>(
        "user/profile/email/check"
    );
    return useMutation({
        mutationFn: (email: string) => apiClient.post({ email }),
    });
}
