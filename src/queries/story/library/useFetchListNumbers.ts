import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";

export type StoryNumbers = {
    published: {
        shorts: number;
        serieses: number;
        novels: number;
    };
    draft: {
        shorts: number;
        serieses: number;
        novels: number;
    };
};

export default function useFetchListNumbers() {
    const apiClient = new APIClient<unknown, StoryNumbers>(
        "story/library/numbers"
    );
    return useQuery({
        queryKey: ["user-story-numbers"],
        queryFn: () => apiClient.get(),
    });
}
