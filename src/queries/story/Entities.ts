export type Page = {
    _id?: string;
    pageNumber: number;
    content: string;
};

export type Character = {
    _id?: string;
    name: string;
    about?: string;
};

export type Location = {
    _id?: string;
    name: string;
    about?: string;
};

export type Story = {
    _id: string;
    user?: {
        _id: string;
        fullName: string;
        photo: string;
    };
    type: string;
    title: string;
    tagline: string;
    poster: string;
    genres: string[];
    rated: string;
    language: string;
    summary: string;
    pages: Page[];
    characters: Character[];
    locations: Location[];
    rating: number;
    reviews: string[];
    isPublished: boolean;
    createdAt?: string;
};

export type Query = {
    sort?: string;
    keyword?: string;
    type?: string;
    genres?: string[];
};
