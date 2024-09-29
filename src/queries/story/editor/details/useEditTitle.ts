import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditTitle(id: string) {
    const apiClient = new APIClient<{ title: string }, string>(
        "story/editor/details/title"
    );
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (title: string) =>
            apiClient.patch({ title }, { params: { id } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["story-draft-details", id],
            }),
    });
}
