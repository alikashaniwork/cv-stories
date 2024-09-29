import APIClient from "@/src/queries/apiClient";
import { Character } from "@/src/queries/story/Entities";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditCharacter(id: string, characterId: string) {
    const apiClient = new APIClient<Character, string>(
        "story/editor/character/edit"
    );
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: Character) =>
            apiClient.patch(data, { params: { id, characterId } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["story-draft-details", id],
            }),
    });
}
