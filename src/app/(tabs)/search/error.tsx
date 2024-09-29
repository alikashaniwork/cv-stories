"use client";

export default function Error({ error }: { error: Error }) {
    return (
        <div>
            Error
            <p>{error.message}</p>
        </div>
    );
}
