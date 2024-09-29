import APIClient from "@/src/queries/apiClient";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { IUser, Register } from "../Entities";

export default function useSignin() {
    const { replace } = useRouter();
    const apiClient = new APIClient<Register, IUser>("user/account/signin");
    return useMutation({
        mutationFn: (data: Register) => apiClient.post(data),
        onSuccess: () => replace("account/dashboard"),
    });
}
