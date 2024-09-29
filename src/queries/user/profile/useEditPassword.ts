import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Password = {
    oldPassword: string;
    newPassword: string;
};

export default function useEditPassword() {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<Password, string>("user/profile/password");
    return useMutation({
        mutationFn: (data: Password) => apiClient.patch(data),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["user-details"],
            }),
    });
}
