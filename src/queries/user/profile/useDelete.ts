import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function useDeleteAccount() {
    const { replace, refresh } = useRouter();
    const queryClient = useQueryClient();
    const apiClient = new APIClient<unknown, string>("user/profile/details");
    return useMutation({
        mutationFn: () => apiClient.delete(),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user-details"] });
            queryClient.clear();
            replace("/");
            refresh();
        },
    });
}
