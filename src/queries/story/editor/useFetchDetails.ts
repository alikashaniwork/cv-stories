import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Story } from "../Entities";

export default function useFetchStoryDetails(id: string) {
    const apiClient = new APIClient<unknown, Story>("story/editor/details");
    return useQuery({
        queryKey: ["story-draft-details", id],
        queryFn: () => apiClient.get({ params: { id } }),
    });
}
