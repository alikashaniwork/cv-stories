import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import BackdropForm from "@/src/app/_components/modules/BackdropForm";
import useEditGenres from "@/src/queries/story/editor/details/useEditGenres";
import useFetchStoryDetails from "@/src/queries/story/editor/useFetchDetails";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
    open: boolean;
    onClose: () => void;
}

const items = ["Drama", "Horror", "Fiction", "Mystery", "Sci-Fi", "Crime"];

const Edit = ({ open, onClose }: Props) => {
    const { id } = useParams<{ id: string }>();
    const { data: story } = useFetchStoryDetails(id);
    const [genres, setGenres] = useState<string[]>([]);

    const handleGenre = (value: string) => {
        const alreadyAdded = genres.includes(value);
        setGenres(
            alreadyAdded
                ? genres.filter((g) => g !== value)
                : [value, ...genres]
        );
    };

    useEffect(() => {
        story && setGenres(story.genres);
    }, [story]);

    const edit = useEditGenres(id);

    const { isPending, isSuccess, error, data: resData, reset } = edit;
    return (
        <>
            <BackdropForm
                isOpen={open}
                onClose={onClose}
                isLoading={isPending}
                submitTitle="Save"
                onSubmit={() =>
                    edit.mutate(genres, {
                        onSuccess: () => onClose(),
                    })
                }
                title="Edit Genres"
            >
                <ul className="!w-dvw h-[calc(100vh-200px)] overflow-y-auto flex flex-col gap-4 p-6">
                    {items.map((genre) => (
                        <li
                            key={genre}
                            className={`p-4 rounded-3xl border transition-all duration-500
                                ${
                                    genres.includes(genre)
                                        ? "border-blue"
                                        : "border-neutral-600"
                                }
                                bg-neutral-800`}
                            onClick={() => handleGenre(genre)}
                        >
                            <p className="text-center uppercase font-sfbold tracking-wider">
                                {genre}
                            </p>
                        </li>
                    ))}
                </ul>
            </BackdropForm>

            <ActionResponse
                success={isSuccess}
                error={error?.message || ""}
                message={resData || ""}
                reset={reset}
            />
        </>
    );
};

export default Edit;
