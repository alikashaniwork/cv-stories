import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Story } from "../../Entities";

export default function useFetchBannerStories() {
    const apiClient = new APIClient<unknown, Story[]>(
        "story/general/landing/banner"
    );
    return useQuery({
        queryKey: ["banner-stories"],
        queryFn: () => apiClient.get(),
    });
}
