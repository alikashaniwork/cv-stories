import APIClient from "@/src/queries/apiClient";
import { Photo } from "@/src/queries/user/Entities";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditPhoto() {
    const apiClient = new APIClient<Photo, string>("user/profile/photo");
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: Photo) => apiClient.patch(data),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["user-details"],
            }),
    });
}
