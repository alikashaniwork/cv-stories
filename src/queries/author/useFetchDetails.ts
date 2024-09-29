import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { IUser } from "../user/Entities";

export default function useFetchAuthorDetails(id: string) {
    const apiClient = new APIClient<unknown, IUser>("author/details");
    return useQuery({
        queryKey: ["author-details", id],
        queryFn: () => apiClient.get({ params: { id } }),
    });
}
