import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Story } from "../story/Entities";
import { IUser } from "../user/Entities";

type Search = {
    stories: Story[];
    authors: IUser[];
};

export default function useSearchSuggestions() {
    const apiClient = new APIClient<unknown, Search>("search/suggestions");
    return useQuery({
        queryKey: ["search-suggestions"],
        queryFn: () => apiClient.get(),
    });
}
