import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeletePoster(id: string) {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<unknown, string>("story/editor/poster");
    return useMutation({
        mutationFn: async () => await apiClient.delete({ params: { id } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["story-draft-details", id],
            }),
    });
}
