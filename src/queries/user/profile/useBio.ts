import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditBio() {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<{ bio: string }, string>(
        "user/profile/bio"
    );
    return useMutation({
        mutationFn: (bio: string) => apiClient.patch({ bio }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["user-details"],
            }),
    });
}
