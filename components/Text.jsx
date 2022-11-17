import { styled, theme } from "../stitches.config";

export const Text = styled("p", {
  color: "#000",
  variants: {
    style: {
      pageTitle: {
        fontFamily: theme.fontFamily.serif,
      },
      songTitle: {
        fontFamily: theme.fontFamily.sansMedium,
        textTransform: "uppercase",
      },
      songArtist: {
        fontFamily: theme.fontFamily.mono,
      },
      songAlbum: {
        fontFamily: theme.fontFamily.monoItalic,
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
    },
  },
});
