/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('/src/images/fondo_header_navidad.jpg')",
      },
      fontFamily: {
        'christmas': ['Mountains of Christmas', 'serif'],
        'mon': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF0000",

          secondary: "#FFFFFF",

          accent: "#FFD700",

          neutral: "#2E8B57",

          "base-100": "#A52A2A",

          info: "#00BFFF",

          success: "#00ff00",

          warning: "#dc2626",

          error: "#ff0000",
        },
      },
    ],
  },
};
