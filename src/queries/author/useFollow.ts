import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useFollowAuthor() {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<unknown, string>("author/follow");
    return useMutation({
        mutationFn: (id: string) => apiClient.patch({}, { params: { id } }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["user-details"],
            });
            queryClient.invalidateQueries({
                queryKey: ["user-followings"],
            });
        },
    });
}
