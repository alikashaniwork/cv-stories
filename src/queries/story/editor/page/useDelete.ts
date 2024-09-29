import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeletePage(id: string, pageId: string) {
    const apiClient = new APIClient<unknown, string>(
        "story/editor/page/delete"
    );
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => apiClient.delete({ params: { id, pageId } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["story-draft-details", id],
            }),
    });
}
