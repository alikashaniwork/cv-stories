import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditEmail() {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<{ email: string }, string>(
        "user/profile/email/edit"
    );
    return useMutation({
        mutationFn: (email: string) => apiClient.patch({ email }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["user-details"],
            }),
    });
}
