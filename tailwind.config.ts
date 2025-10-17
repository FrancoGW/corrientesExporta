import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#a5d6a7",
          500: "#43a047", 
          600: "#2e7d32",
        },
        accent: {
          100: "#e8f5e9",
        },
      },
      boxShadow: {
        'brand-card': 'rgba(0, 0, 0, 0.06) 0 8px 24px',
      },
      backgroundImage: {
        'gradient-ife': 'linear-gradient(to top right, #a5d6a7, #dcedc8)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '28': '28px',
      },
      ringWidth: {
        '1': '1px',
      },
      ringColor: {
        'brand-300': '#a5d6a7',
        'slate-200': '#e2e8f0',
        'slate-100': '#f1f5f9',
      },
    },
  },
  plugins: [],
};

export default config;
