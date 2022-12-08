import { styled, theme } from "../../stitches.config";

export const AlbumOverlay = styled("div", {
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  opacity: 0,
  height: "calc(100% - 3px)",
  justifyContent: "center",
  left: 0,
  position: "absolute",
  top: 0,
  transition: "all 0.2s ease-out",
  width: "100%",
});

export const AlbumWrapper = styled("div", {
  position: "relative",
  [`&:hover ${AlbumOverlay}`]: {
    opacity: 1,
  },
});
