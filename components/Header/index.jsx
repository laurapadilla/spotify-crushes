import Container from "../Container";
import { Text } from "../Text";
import { theme } from "../../stitches.config";

export function Header() {
  return (
    <Container
      as="header"
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingY: "2rem",
        gap: "48px",
      }}
    >
      <Text as="h1" style="pageTitle">
        Top40.fm
      </Text>
    </Container>
  );
}
