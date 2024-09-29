import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { IUser } from "../Entities";

export default function useFetchUserDetails() {
    const apiClient = new APIClient<unknown, IUser>("user/profile/details");
    return useQuery({
        queryKey: ["user-details"],
        queryFn: () => apiClient.get(),
    });
}
