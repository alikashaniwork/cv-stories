import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditName() {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<{ fullName: string }, string>(
        "user/profile/name"
    );
    return useMutation({
        mutationFn: (fullName: string) => apiClient.patch({ fullName }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["user-details"],
            }),
    });
}
