import Link from "next/link";
import { theme } from "../../stitches.config";
import Container from "../Container";
import { Text } from "../Text";

export function Footer() {
  return (
    <Container
      as="footer"
      css={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        padding: "1rem",
        marginTop: "2rem",
      }}
    >
      <Link href="/">
        <Text fontFamily="pixel">github</Text>
      </Link>

      <Link href="/">
        <Text fontFamily="pixel">made by @1aurapadilla</Text>
      </Link>
    </Container>
  );
}
