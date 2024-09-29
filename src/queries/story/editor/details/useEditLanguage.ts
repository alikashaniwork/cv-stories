import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditLanguage(id: string) {
    const apiClient = new APIClient<{ language: string }, string>(
        "story/editor/details/language"
    );
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (language: string) =>
            apiClient.patch({ language }, { params: { id } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["story-draft-details", id],
            }),
    });
}
