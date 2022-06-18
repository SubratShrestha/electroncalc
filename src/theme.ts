import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
    bgLight: "#FFF",
    bgDark: "#161616",
    resultBgDark: "#393E46",
    resultBgLight: "#787A91",
    resultLight: "#000",
    resultDark: "#fff",
    numberBgLight: "#F9F9F9",
    numberBgDark: "#181818",
    opLight: "#EAF8F3",
    opDark: "#202020"
}

const theme = extendTheme({ config, colors });

export default theme;
