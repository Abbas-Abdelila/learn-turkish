/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'gradient-hero': 'linear-gradient(70deg, hsl(0deg 0% 99%) 0%, hsl(1deg 69% 98%) 51%, hsl(1deg 85% 97%) 69%, hsl(1deg 91% 96%) 80%, hsl(1deg 94% 95%) 88%, hsl(1deg 95% 93%) 93%, hsl(0deg 95% 92%) 97%, hsl(0deg 95% 91%) 99%, hsl(0deg 94% 90%) 100%, hsl(0deg 93% 88%) 100%)',
        },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-hamburgers")
  ],
};
