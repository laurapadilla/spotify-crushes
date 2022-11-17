import Container from "../Container";
import { Text } from "../Text";
import { Title, Subhead } from "./styles";
import { theme } from "../../stitches.config";

export function Header({ user }) {
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
      <Text as="h1" size="6" style="pageTitle">
        Top40.fm
      </Text>
      <Subhead>
        {user
          ? "nice songs"
          : "This is what I've been listening to this past year"}
      </Subhead>
    </Container>
  );
}
