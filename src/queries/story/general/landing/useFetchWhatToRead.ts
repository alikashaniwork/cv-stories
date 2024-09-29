import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Story } from "../../Entities";

export default function useFetchWhatToRead() {
    const apiClient = new APIClient<unknown, Story[]>(
        "story/general/landing/what-to-read"
    );
    return useQuery({
        queryKey: ["what-to-read-stories"],
        queryFn: () => apiClient.get(),
    });
}
