import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // Define your custom CSS variables here
  styles: {
    global: {
      ":root": {
        "chakra--my-custom-color": "#f00",
        "chakra--my-custom-padding": "16px",
      },
    },
  },
});

export default theme;
