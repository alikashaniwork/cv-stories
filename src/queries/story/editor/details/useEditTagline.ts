import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditTagline(id: string) {
    const apiClient = new APIClient<{ tagline: string }, string>(
        "story/editor/details/tagline"
    );
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (tagline: string) =>
            apiClient.patch({ tagline }, { params: { id } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["story-draft-details", id],
            }),
    });
}
