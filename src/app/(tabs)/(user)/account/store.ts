import { create } from "zustand";

type Store = {
    list: any[];
    setAdd: (item: any) => void;
    setRemoveAll: () => void;
};

const useLatestVisitedStore = create<Store>((set) => {
    let storage: Storage | null = null;
    if (typeof window !== "undefined") storage = window.localStorage;

    if (!storage) {
        console.error("localStorage is not supported in this browser.");
    }
    try {
        const storedList = storage?.getItem("latestVisited");
        const initialStoredList: any[] = storedList
            ? JSON.parse(storedList)
            : [];

        return {
            list: initialStoredList,
            setAdd: (item: any) =>
                set((state: { list: any[] }) => {
                    const itemExists = state.list.find(
                        (p) => p._id === item._id
                    );
                    const newList = itemExists
                        ? [...state.list]
                        : [item, ...state.list];

                    storage?.setItem("latestVisited", JSON.stringify(newList));
                    return {
                        list: newList,
                    };
                }),
            setRemoveAll: () =>
                set(() => {
                    const newItems: any[] = [];

                    storage?.setItem("latestVisited", JSON.stringify(newItems));
                    return {
                        list: [],
                    };
                }),
        };
    } catch (error) {
        console.error("Error loading data from localStorage:", error);
    }
    return {
        list: [],
        setAdd: () => {},
        setRemoveAll: () => {},
    };
});

export default useLatestVisitedStore;
