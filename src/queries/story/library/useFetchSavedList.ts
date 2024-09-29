import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Story } from "../Entities";

export default function useFetchUserSavedStories() {
    const apiClient = new APIClient<unknown, Story[]>("story/library/save");
    return useQuery({
        queryKey: ["saved-stories"],
        queryFn: () => apiClient.get(),
    });
}
