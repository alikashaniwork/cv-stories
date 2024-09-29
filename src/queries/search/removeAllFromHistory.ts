const removeAllFromHistory = (storage: Storage | null) => {
    const updatedList = [] as string[];
    if (storage) {
        storage.setItem("searchHistory", JSON.stringify(updatedList));
    }
    return {
        searchHistory: [],
    };
};

export default removeAllFromHistory;
