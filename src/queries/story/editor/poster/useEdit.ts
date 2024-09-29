import APIClient from "@/src/queries/apiClient";
import { Photo } from "@/src/queries/user/Entities";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditPoster(id: string) {
    const apiClient = new APIClient<Photo, string>("story/editor/poster");
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: Photo) => apiClient.patch(data, { params: { id } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["story-draft-details", id],
            }),
    });
}
