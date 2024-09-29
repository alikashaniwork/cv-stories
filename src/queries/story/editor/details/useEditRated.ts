import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditRated(id: string) {
    const apiClient = new APIClient<{ rated: string }, string>(
        "story/editor/details/rated"
    );
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (rated: string) =>
            apiClient.patch({ rated }, { params: { id } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["story-draft-details", id],
            }),
    });
}
