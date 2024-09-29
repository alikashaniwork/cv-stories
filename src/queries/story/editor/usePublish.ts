import APIClient from "@/src/queries/apiClient";
import convertURLName from "@/src/utils/convertURLName";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Story } from "../Entities";

export default function usePublish(id: string) {
    const router = useRouter();
    const apiClient = new APIClient<unknown, Story>("story/editor/publish");
    return useMutation({
        mutationFn: () => apiClient.patch({}, { params: { id } }),
        onSuccess: (data) => {
            router.push(
                `/story/${data._id}/${convertURLName(data.title)}/preview`
            );
        },
    });
}
