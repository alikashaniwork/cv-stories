import APIClient from "@/src/queries/apiClient";
import { Location } from "@/src/queries/story/Entities";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditLocation(id: string, locationId: string) {
    const apiClient = new APIClient<Location, string>(
        "story/editor/location/edit"
    );
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: Location) =>
            apiClient.patch(data, { params: { id, locationId } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["story-draft-details", id],
            }),
    });
}
