import { styled, theme } from "../../stitches.config";

const BaseButton = styled("button", {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  outline: "none",
});

export const LoginButton = styled(BaseButton, {
  alignItems: "center",
  background: "lime",
  display: "flex",
  justifyContent: "center",
  padding: "8px",
});
