import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        '360': '360px', // Custom breakpoint for 360px
        '480': '480px', // Custom breakpoint for 480px
        '640': '640px', // Custom breakpoint for 640px
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
} satisfies Config;
