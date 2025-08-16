import { createSystem, defaultConfig } from "@chakra-ui/react";

export const theme = createSystem({
  ...defaultConfig,
  theme: {
    tokens: {
        fonts: {
            body: {value: "var(--font-public-sans)"},
            heading: {value: "var(--font-public-sans)"},
        },
        shadows: {
          xxs: { value: "0 1px 1px rgba(0, 0, 0, 0.05)" },
        }
    }
  },
});