import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        green: "#1AC822",
        "green-500": "#F0FFFB",
      },
      fontSize: {
        title: '48px'
      }
    },
  },
  plugins: [],
};
export default config;
