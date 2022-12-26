import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    extend: {
      colors: {
        'cyan-700': '#80CBC4',
        'teal-500': '#B0C4DE'
      },
      animation: {
        pulse: 'pulse 0.8s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.2 },
        }
      },
    },
  },
};
if (IS_BROWSER) setup(config);
