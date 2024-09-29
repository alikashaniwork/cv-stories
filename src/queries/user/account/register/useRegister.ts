import APIClient from "@/src/queries/apiClient";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Register } from "../../Entities";

export default function useRegister() {
    const { replace } = useRouter();
    const apiClient = new APIClient<Register, string>("user/account/register");
    return useMutation({
        mutationFn: (data: Register) => apiClient.post(data),
        onSuccess: () => replace(`/account/dashboard`),
    });
}
