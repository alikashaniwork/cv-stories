import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Story } from "../../Entities";

export default function useFetchHottests(type: string) {
    const apiClient = new APIClient<unknown, Story>(
        "story/general/landing/hottest"
    );
    return useQuery({
        queryKey: ["hottests-story", type],
        queryFn: () => apiClient.get({ params: { type } }),
    });
}
