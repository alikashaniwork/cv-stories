import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Story } from "../Entities";

export default function useFetchUserStories(status: string) {
    const apiClient = new APIClient<unknown, Story[]>("story/library/list");
    return useQuery({
        queryKey: ["user-stories", status],
        queryFn: () => apiClient.get({ params: { status } }),
    });
}
