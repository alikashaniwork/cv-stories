import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Story } from "../story/Entities";
import { IUser } from "../user/Entities";

type Search = {
    stories: Story[];
    authors: IUser[];
};

export default function useSearch(keyword: string) {
    const apiClient = new APIClient<unknown, Search>("search");
    return useQuery({
        queryKey: ["search", keyword],
        queryFn: () => apiClient.get({ params: { keyword } }),
    });
}
