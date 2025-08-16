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
        primary: { value: "#00732E" },
        bg: { value: "blue" },
      },
      fonts: {
        body: {value: "var(--font-public-sans), sans-serif"},
        heading: {value: "var(--font-public sans), sans-serif"},
      },
      shadows: {
        xxs: { value: "1px 1px 1px rgba(0, 0, 0, 0.05)" },
      },
      sizes: {
        sidebar: { value: "250px" },
      }
    },
    semanticTokens: {
      colors: {
        slate: {
          value: {
            base: "#334155",
            _dark: "#F8FAFC",
          }
        },
        active: {
          value: {
            base: "#E9FAF0",
            _dark: "#1A3C2D"
          }
        },
        menuItem: {
          value: {
            base: "#525D73",
            _dark: "#FAFAFA",
          }
        },
        divider: {
          value: {
            base: "#E0E2E7",
            _dark: "#4A4A4A",
          }
        },
        accordionBorder: {
          value: {
            base: "#F0F1F3",
            _dark: "#2D2D2D",
          }
        }
      },
      shadows: {
        sidebar: {
          value: {
            base: "0px 16px 18px 0px #0000000F",
            _dark: "0px 16px 18px 0px #0000001F",
          }
        },
        dasboardCard: {
          value: {
            _dark: "0px 1px 3px 0px #0000000D",
            base: "0px 1px 2px 0px #0000001A",
          }
        }
      },
      borders: {
        sidebar: { value: "1px solid #E2E8F0" }
      },
      radii: {
        sidebar: { value: "12px" },
      },
      spacing: {
        sidbear: {
          value: "28px 16px"
        }
      },
      fontSizes: {
        sidebar: {
          value: "15px"
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
