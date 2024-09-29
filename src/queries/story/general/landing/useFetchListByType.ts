import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Story } from "../../Entities";

export default function useFetchStoriesByType(type: string) {
    const apiClient = new APIClient<unknown, Story[]>(
        `story/general/landing/based-on/${type}`
    );
    return useQuery({
        queryKey: ["type-stories", type],
        queryFn: () => apiClient.get(),
    });
}
