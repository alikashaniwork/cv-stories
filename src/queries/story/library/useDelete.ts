import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteStory(storyId: string) {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<unknown, string>("story/library/delete");
    return useMutation({
        mutationFn: () => apiClient.delete({ params: { storyId } }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["user-stories"],
            });
            queryClient.invalidateQueries({
                queryKey: ["stories", {}],
            });
        },
    });
}
