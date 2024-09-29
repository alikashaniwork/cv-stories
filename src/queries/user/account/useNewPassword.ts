import APIClient from "@/src/queries/apiClient";
import { useMutation } from "@tanstack/react-query";

export default function useNewPassword() {
    const apiClient = new APIClient<
        { password: string; token: string },
        string
    >("user/account/new-password");
    return useMutation({
        mutationFn: (data: { password: string; token: string }) =>
            apiClient.patch(data),
    });
}
