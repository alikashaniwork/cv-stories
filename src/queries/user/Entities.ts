import { Story } from "../story/Entities";

export type Register = {
    fullName?: string;
    email: string;
    password: string;
};

export type Photo = {
    photo: string;
    cloudinary_id: string;
};

export type IUser = {
    _id?: string;
    fullName: string;
    bio: string;
    type: "Novelist" | "Screen writer" | "Poemist" | "Writer";
    name: string;
    email: string;
    username: string;
    photo: string;
    cloudinary_id: string;
    saved: string[];
    followings: string[];
    followers: string[];
    stories: Story[];
};
