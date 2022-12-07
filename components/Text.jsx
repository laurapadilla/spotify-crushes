import { styled, theme } from "../stitches.config";

export const Text = styled("p", {
  color: theme.colors.text,
  variants: {
    style: {
      pageTitle: {
        fontFamily: theme.fontFamily.serif,
        fontSize: "10vw",
      },
      subhead: {
        fontFamily: theme.fontFamily.sans,
        fontSize: 20,
      },
      songTitle: {
        fontFamily: theme.fontFamily.sansMedium,
        textTransform: "uppercase",
        fontSize: 12,
        color: theme.colors.blue,
      },
      songArtist: {
        fontFamily: theme.fontFamily.mono,
        fontSize: 14,
        "&:hover": {
          textDecoration: "underline",
        },
      },
      songAlbum: {
        fontFamily: theme.fontFamily.monoItalic,
        fontSize: 14,
      },
    },
    fontFamily: {
      mono: {
        fontFamily: theme.fontFamily.mono,
      },
      serif: {
        fontFamily: theme.fontFamily.serif,
      },
      sans: {
        fontFamily: theme.fontFamily.sans,
      },
      sansMedium: {
        fontFamily: theme.fontFamily.sansMedium,
      },
      sansBold: {
        fontFamily: theme.fontFamily.sansBold,
      },
      monoItalic: {
        fontFamily: theme.fontFamily.monoItalic,
      },
      pixel: {
        fontFamily: theme.fontFamily.pixel,
      },
    },
    size: {
      1: {
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
      },
      3: {
        fontSize: "$3",
      },
      4: {
        fontSize: "$4",
      },
      5: {
        fontSize: "$5",
      },
      6: {
        fontSize: "$6",
      },
      7: {
        fontSize: "$7",
      },
      8: {
        fontSize: "$8",
      },
      9: {
        fontSize: "$9",
      },
    },
  },
});
