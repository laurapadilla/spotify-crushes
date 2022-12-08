import { createStitches } from "@stitches/react";

const stitches = createStitches({
  theme: {
    colors: {
      blue: "#093CF2",
      green: "#18F8B5",
      text: "#000000",
      yellow: "#F4FF09",
      white: "#ffffff",
    },
    fontSizes: {
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "48px",
      7: "56px",
      8: "64px",
      9: "72px",
    },
    fontFamily: {
      serif: "Messapia",
      sans: "GT America Expanded Regular Trial",
      sansMedium: "GT America Expanded Medium Trial",
      sansBold: "GT America Expanded Bold Trial",
      mono: "GT America Mono Regular Trial",
      monoItalic: "GT America Mono Regular Italic Trial",
      pixel: "W95FA",
    },
    letterSpacings: {
      0: 0,
      1: 0,
      2: 0,
      3: "-0.01em",
      4: "-0.02em",
      5: "-0.02em",
      6: "-0.02em",
      7: "-0.02em",
      8: "-0.025em",
      9: "-0.025em",
      10: "-0.03em",
    },
  },
  media: {
    bp0: "(min-width: 375px)",
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 960px)",
    bp4: "(min-width: 1024px)",
    bp5: "(min-width: 1200px)",
    bp6: "(min-width: 1400px)",
  },
  utils: {
    margin: (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    padding: (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  prefix: "st-",
});

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  variants,
} = stitches;
