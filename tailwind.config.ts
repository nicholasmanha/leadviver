import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    fontSize: {
      base: '0.85rem',
      '4xl': '3.125rem',
      '3xl': '1.8rem',
      '2xl': '1.475rem',
      xl: '1.2rem',
      lg: '0.9rem',
      'table-content': '0.875rem',
      sm: '0.75rem',
      xs: '0.625rem',
      subtitle: '0.75rem',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    fontWeight: {
      normal: '300',
      medium: '400',
      semibold: '500',
    },
    fontFamily: {
      sans: "var(--font-kumbh)",
      table: "var(--font-inter)",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'primary': "var(--primary)",
        'primary-light': "var(--primary-light)",
        'secondary': "var(--secondary)",
        'secondary-light': "var(--secondary-light)",
        'background': "var(--background)",
        'background-padding': "var(--background-padding)",
        'text-primary': "var(--text-primary)",
        'text-secondary': "var(--text-secondary)",
        'accent': "var(--accent)",
        'button': "var(--button)",
        'success': "var(--success)",
        'success-light': "var(--success-light)",
        'failure': "var(--failure)",
        'failure-dark': "var(--failure-dark)",
        'failure-light': "var(--failure-light)",
        'red': "var(--red)",
        'blue': "var(--blue)",
        'navfoot': "var(--navfoot)",
        'link': "var(--link)",
      },
      maxWidth: {
        'xl': '56rem',
      },
      fontSize: {
        'table-content': '0.875rem',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config