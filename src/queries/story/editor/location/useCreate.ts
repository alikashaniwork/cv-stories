import APIClient from "@/src/queries/apiClient";
import { Location } from "@/src/queries/story/Entities";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useCreateLocation(id: string) {
    const apiClient = new APIClient<Location, string>(
        "story/editor/location/create"
    );
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: Location) =>
            apiClient.patch(data, { params: { id } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["story-draft-details", id],
            }),
    });
}
