import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "sign-in": 
          "linear-gradient(from 169deg at 9% 49% 99%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "gradient-signin": "0px 0px 8px 0px rgba(0, 0, 0, 0.12) inset, 0px 4px 12px 0px rgba(0, 0, 0, 0.08)",
        'account-button-sm': '0px 0px 2px 1px #96532B',
        'account-button-md': '0px 0px 8px 4px #96532B',
        'account-button-lg': '0px 0px 8px 6px #96532B',
        'account-button-bg': '0px 0px 30px 1px #96532B',
      },
    },
  },
  plugins: [],
};
export default config;
