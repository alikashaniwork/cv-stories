import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Story } from "../../Entities";

export default function useFetchStoriesByGenre(genre: string, type: string) {
    const apiClient = new APIClient<unknown, Story[]>(
        `story/general/landing/based-on/${genre}/${type}`
    );
    return useQuery({
        queryKey: ["genre-stories", genre, type],
        queryFn: () => apiClient.get(),
    });
}
