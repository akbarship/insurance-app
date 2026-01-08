// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html", // or wherever your HTML/JS/Vue files are
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                // your custom colors here
                logo: "#0040a6",
                softRed: "#F87171",
                darkGray: "#1F2937",
            },
        },
    },
    plugins: [],
}
