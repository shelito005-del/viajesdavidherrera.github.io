// tailwind-config.js
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#ec4913",
                "background-light": "#f8f6f6",
                "background-dark": "#221510",
                "text-light": "#181311",
                "text-muted-light": "#896b61",
                "text-dark": "#eaddd7",
                "text-muted-dark": "#b09e96"
            },
            fontFamily: {
                "display": ["Newsreader", "serif"],
                "sans": ["Noto Sans", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
};
