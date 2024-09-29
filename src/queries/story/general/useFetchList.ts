import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Query, Story } from "../Entities";

export default function useFetchStories(queries: Query) {
    const apiClient = new APIClient<unknown, Story[]>("story/general/list");
    return useQuery({
        queryKey: ["stories", queries],
        queryFn: () =>
            apiClient.get({ params: { queries: JSON.stringify(queries) } }),
    });
}
