/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{html,js,jsx}",
        "./index.html"
    ],
    safelist: [
        "fadeIn",
        "animate-fadeIn"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "desafios": "url('/public/img/desafios.png')",
                "inspiradoras": "url('/public/img/inspiradoras.png')",
                "cursosVagas": "url('/public/img/cursos/cursos_vagas.jpg')",
                "sobre": "url('../public/img/sobre.png')"
            },
            animation: {
                fadeIn: "fadeIn 2s ease-in forwards"
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 }
                }
            }
        },
    },

    plugins: [],
};
