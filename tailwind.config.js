/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./features/**/*.{js,ts,jsx,tsx,mdx}",

    ],
    theme: {
        extend: {
            colors: {
                primary: "#ffffff",
                secondary: "#f8EDE3",
                accent: "#EDFAE2",
            },
            fontFamily: {
                sans: ["Inter","SUSE", "sora", "Mulish", "sans-serif"],
            },
            container: {
                center: true,
                padding: "1rem",
            },
        },
    },
    plugins: [],
};
