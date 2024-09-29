"use client";

export default function Error({ error }: { error: Error }) {
    return (
        <div className="pt-24 flex flex-col items-center gap-2 *:text-center">
            <p className="font-sfb text-red-500 uppercase">Error</p>
            <p>{error.message}</p>
            <p>{error.stack}</p>
        </div>
    );
}
