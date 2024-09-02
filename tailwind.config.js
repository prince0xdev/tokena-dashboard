/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
      fontFamily: {
        // la configuration Tailwindcss pour la police mono-sans
        'mono-sans-regular': ['Mona-Sans Regular', 'sans-serif'],
        'mono-sans-bold': ['Mona-Sans-Bold', 'sans-serif'],
        

      },
      colors : {
        blanc1 : "#FFFFFF",
        blanc2 : "#F3F4F6",
        gris1 : "#D1D5DB",
        gris2 : "#687280",
        noir : "#1D1D1D",
        jaune : "#F2D604",
        vert : "#01B130",
        rouge : "#CB0101",
        bleu1 : "#006EFF",
        bleu2 : "#0065E7",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
