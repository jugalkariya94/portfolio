module.exports = {
    plugins: [
        "tailwindcss/nesting",
        "tailwindcss",
        "autoprefixer",

        // A plugin that is toggled on or off based on environment:
        [
            'cssnano',
            process.env.NODE_ENV === 'production'
                ? {
                    preset: 'default',
                }
                : false,
        ],

    ],
}
