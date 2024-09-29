import APIClient from "@/src/queries/apiClient";
import { Character } from "@/src/queries/story/Entities";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useCreateCharacter(id: string) {
    const apiClient = new APIClient<Character, string>(
        "story/editor/character/create"
    );
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: Character) =>
            apiClient.patch(data, { params: { id } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["story-draft-details", id],
            }),
    });
}
