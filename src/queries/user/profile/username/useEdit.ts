import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditUsername() {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<{ username: string }, string>(
        "user/profile/username/edit"
    );
    return useMutation({
        mutationFn: (username: string) => apiClient.patch({ username }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["user-details"],
            }),
    });
}
