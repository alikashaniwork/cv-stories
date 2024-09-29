import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteCharacter(id: string, characterId: string) {
    const apiClient = new APIClient<unknown, string>(
        "story/editor/character/delete"
    );
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => apiClient.delete({ params: { id, characterId } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["story-draft-details", id],
            }),
    });
}
