import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Query, Story } from "../Entities";

export default function useFetchSimilarStories(queries: Query) {
    const apiClient = new APIClient<unknown, Story[]>("story/general/list");
    return useQuery({
        queryKey: ["similar-stories", queries],
        queryFn: () =>
            apiClient.get({ params: { queries: JSON.stringify(queries) } }),
    });
}
