import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        line: token("line"),
        ink: token("ink"),
        muted: token("muted"),
        brand: {
          DEFAULT: token("brand"),
          strong: token("brand-strong"),
          "strong-hover": token("brand-strong-hover"),
          tint: token("brand-tint"),
        },
        navy: {
          DEFAULT: token("navy"),
          muted: token("navy-muted"),
        },
        "on-navy": token("on-navy"),
        success: token("success"),
        // Aliassen voor bestaande code
        background: token("bg"),
        foreground: token("ink"),
        primary: {
          DEFAULT: token("brand"),
          hover: token("brand-strong"),
        },
      },
      borderRadius: {
        btn: "10px",
      },
      spacing: {
        section: "96px",
      },
    },
  },
  plugins: [],
};
export default config;
