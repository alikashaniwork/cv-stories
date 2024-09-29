import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { IUser } from "../user/Entities";

export default function useFetchUserFollowings() {
    const apiClient = new APIClient<unknown, IUser[]>("author/follow");
    return useQuery({
        queryKey: ["user-followings"],
        queryFn: () => apiClient.get(),
    });
}
