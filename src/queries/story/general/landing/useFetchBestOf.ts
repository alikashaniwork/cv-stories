import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Story } from "../../Entities";

export default function useFetchBestOfStories() {
    const apiClient = new APIClient<unknown, Story[]>(
        "story/general/landing/best-of"
    );
    return useQuery({
        queryKey: ["best-of-stories"],
        queryFn: () => apiClient.get(),
    });
}
