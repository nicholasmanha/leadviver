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
      base: '1rem',
      '4xl': '3.125rem',
      '3xl': '2.5rem',
      '2xl': '1.875rem',
      xl: '1.5rem',
      lg: '1.25rem',
      'table-content': '0.875rem',
      small: '0.75rem',
      tiny: '0.625rem',
      subtitle: '0.75rem',
    },
    
    colors: {
      'primary': '#262B49',
      'primary-light': '#3F4774',
      'secondary': '#333959',
      'secondary-light': '#474D70',
      'background': '#0E1824',
      'background-padding': '#1A1E37',
      'text-primary': '#FFFFFF',
      'text-secondary': '#D6D7DE',
      'table-stroke': '#131313', // 58% opacity
      'accent': '#E04DDA',
      'button': '#4B5173',
      'success': '#5DB38F',
      'success-light': '#ABEBD0',
      'failure': '#FF7A93',
      'failure-dark': '#68343D',
      'failure-light': '#FFB1C0',
      'red': '#A22C2C',
      'blue': '#1B5E84',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
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