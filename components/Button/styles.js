import { styled, theme } from "../../stitches.config";

const BaseButton = styled("button", {
  background: "transparent",
  border: "none",
  outline: "none",
});

export const LoginButton = styled(BaseButton, {
  background: "lime",
  padding: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
