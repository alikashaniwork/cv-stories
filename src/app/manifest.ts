import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Stories",
        short_name: "Stories",
        description: "Stories",
        start_url: "/",
        display: "standalone",
        background_color: "#111111",
        theme_color: "#111111",
        icons: [
            {
                src: "/logo.png",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
