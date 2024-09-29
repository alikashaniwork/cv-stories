import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeletePhoto() {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<unknown, string>("user/profile/photo");
    return useMutation({
        mutationFn: async () => await apiClient.delete(),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["user-details"],
            }),
    });
}
