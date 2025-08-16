// panda.config.js
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  outdir: "src/styled-system",
  jsxFramework: "react",
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "#02983E" }
        }
      }
    }
  }
});