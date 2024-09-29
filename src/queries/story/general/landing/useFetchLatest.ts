import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Story } from "../../Entities";

export default function useFetchLatestStories() {
    const apiClient = new APIClient<unknown, Story[]>(
        "story/general/landing/latest"
    );
    return useQuery({
        queryKey: ["latest-stories"],
        queryFn: () => apiClient.get(),
    });
}
