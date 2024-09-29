import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Story } from "../Entities";

export default function useSave(id: string) {
    const apiClient = new APIClient<unknown, Story>("story/library/save");
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => apiClient.patch({}, { params: { id } }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["saved-stories"],
            });
            queryClient.invalidateQueries({
                queryKey: ["story-details", id],
            });
            queryClient.invalidateQueries({
                queryKey: ["user-details"],
            });
        },
    });
}
