import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteAllCharacters(id: string) {
    const apiClient = new APIClient<unknown, string>(
        "story/editor/character/delete-all"
    );
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => apiClient.delete({ params: { id } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["story-draft-details", id],
            }),
    });
}
