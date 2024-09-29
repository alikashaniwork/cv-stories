import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditGenres(id: string) {
    const apiClient = new APIClient<{ genres: string[] }, string>(
        "story/editor/details/genres"
    );
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (genres: string[]) =>
            apiClient.patch({ genres }, { params: { id } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["story-draft-details", id],
            }),
    });
}
