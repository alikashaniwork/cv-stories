import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditSummary(id: string) {
    const apiClient = new APIClient<{ summary: string }, string>(
        "story/editor/details/summary"
    );
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (summary: string) =>
            apiClient.patch({ summary }, { params: { id } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["story-draft-details", id],
            }),
    });
}
