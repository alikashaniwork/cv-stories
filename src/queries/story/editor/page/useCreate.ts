import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Page } from "../../Entities";

export default function useCreatePage(id: string) {
    const apiClient = new APIClient<Page, string>("story/editor/page/create");
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: Page) => apiClient.post(data, { params: { id } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["story-draft-details", id],
            }),
    });
}
