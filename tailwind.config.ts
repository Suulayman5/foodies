// tailwind.config.ts
import type { Config } from "tailwindcss";
// Dynamically import nativewind preset to avoid module issues
const nativewind = require("nativewind/preset");

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [nativewind],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;