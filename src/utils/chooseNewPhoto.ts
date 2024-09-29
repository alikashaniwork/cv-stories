"use client";
import { ChangeEvent, useState } from "react";

export default function useNewPhoto(
    changeEvent: ChangeEvent<HTMLInputElement>
) {
    const [newPhoto, setNewPhoto] = useState("");
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<any>) => {
        setNewPhoto(e.target.result);
    };
    const files = changeEvent.target.files;
    reader.readAsDataURL(files![0]);
    return newPhoto;
}
