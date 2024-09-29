import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sft: "sft",
                sfl: "sfl",
                sfr: "sfreg",
                sfb: "sfbold",
                sfblack: "sfblack",
                sfh: "sfh",
            },
            textColor: {
                blue: "#007fff",
            },
            backgroundColor: {
                "second-theme": "#1e1e1e",
                backdrop: "#fffbff",
                blue: "#007fff",
            },
            borderColor: {
                blue: "#007fff",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            padding: {
                px: "8%",
            },
        },
    },
    plugins: [],
};
export default config;
