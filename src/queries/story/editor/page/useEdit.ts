import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Page } from "../../Entities";

export default function useEditPage(id: string, pageId: string) {
    const apiClient = new APIClient<Page, string>("story/editor/page/edit");
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: Page) =>
            apiClient.patch(data, { params: { id, pageId } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["story-draft-details", id],
            }),
    });
}
