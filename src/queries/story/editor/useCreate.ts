import APIClient from "@/src/queries/apiClient";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Story } from "../Entities";

type NewStory = {
    title: string;
    type: string;
};

export default function useCreateStory() {
    const router = useRouter();
    const apiClient = new APIClient<NewStory, Story>("story/editor/create");
    return useMutation({
        mutationFn: (data: NewStory) => apiClient.post(data),
        onSuccess: (data) => {
            router.push(`/story/editor/${data._id}/main`);
        },
    });
}
