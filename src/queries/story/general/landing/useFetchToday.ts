import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Story } from "../../Entities";

export default function useFetchTodayStories() {
    const apiClient = new APIClient<unknown, Story[]>(
        "story/general/landing/banner"
    );
    return useQuery({
        queryKey: ["today-stories"],
        queryFn: () => apiClient.get(),
    });
}
