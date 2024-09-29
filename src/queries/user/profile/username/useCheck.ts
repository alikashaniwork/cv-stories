import APIClient from "@/src/queries/apiClient";
import { useMutation } from "@tanstack/react-query";

export default function useCheckUsername() {
    const apiClient = new APIClient<{ username: string }, string>(
        "user/profile/username/check"
    );
    return useMutation({
        mutationFn: (username: string) => apiClient.post({ username }),
    });
}
