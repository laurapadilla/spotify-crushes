import { styled, theme } from "../../stitches.config";

const BaseButton = styled("button", {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  outline: "none",
});

export const LoginButton = styled(BaseButton, {
  alignItems: "center",
  background: "#18F8B5",
  borderColor: "#15ecac #15ecac #13C08C #18F8B5",
  borderImage: "initial",
  borderStyle: "outset",
  borderWidth: "2px",
  display: "flex",
  justifyContent: "center",
  padding: "8px",
  transition: "all 0.1s ease-out",
  "&:hover": {
    backgroundColor: "#29DCA6",
  },
  "&:active": {
    transform: "scale(0.98)",
  },
});
