"use client"

import { ChakraProvider, createSystem, defineConfig, defaultConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#02983E" },
        bg: { value: "blue" },
      },
      fonts: {
        body: {value: "'Public Sans', sans-serif"},
        heading: {value: "'Public Sans', sans-serif"},
      },
      shadows: {
        xxs: { value: "1px 1px 1px rgba(0, 0, 0, 0.05)" },
      }
    },
    semanticTokens: {
      colors: {
        slate: {
          value: {
            base: "#334155",
            _dark: "#F8FAFC",
          }
        }
      }
    }
  }
});

const theme = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
