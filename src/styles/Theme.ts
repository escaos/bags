import { extendTheme } from "@chakra-ui/react";

export const APP_BG_RED_500 = "#E53131";
export const APP_BG_YELLOW_500 = "#FFE73A";

const theme = extendTheme({
  // Define your custom CSS variables here
  styles: {},
  colors: {
    app: {
      red: {
        500: APP_BG_RED_500,
      },
      yellow: {
        500: APP_BG_YELLOW_500,
      },
    },
  },
  components: {
    Tabs: {
      variants: {
        "app-red": {
          tab: {
            color: "grey",
            bg: "transparent",
            border: "1px solid grey",
            borderRadius: "var(--chakra-radii-3xl)",
            _selected: {
              bg: APP_BG_RED_500,
              color: "var(--chakra-colors-white)",
              borderRadius: "var(--chakra-radii-3xl)",
            },
          },
        },
      },
    },
  },
});

export default theme;
