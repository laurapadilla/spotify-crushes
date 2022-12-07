import { theme } from "../../stitches.config";
import Container from "../Container";
import { Text } from "../Text";

export function Loading() {
  return (
    <Container
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "40vh",
      }}
    >
      <Text as="h1" size={4} fontFamily="sansBold">
        Loading Top 40...
      </Text>
    </Container>
  );
}
