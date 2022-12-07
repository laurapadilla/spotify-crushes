import Link from "next/link";
import { theme } from "../../stitches.config";
import Container from "../Container";
import { Text } from "../Text";

export function Footer() {
  return (
    <Container
      as="footer"
      css={{
        background: "#FFF",
        position: "fixed",
        bottom: 0,
        left: 0,
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        padding: "1rem",
        marginTop: "2rem",
      }}
    >
      <Link
        href="https://github.com/laurapadilla/spotify-crushes"
        target="_blank"
        rel="noopener noreferer"
      >
        <Text fontFamily="pixel">github</Text>
      </Link>

      <Link
        a
        href="https://laurapadilla.xyz"
        target="_blank"
        rel="noopener noreferer"
      >
        <Text fontFamily="pixel">made by @1aurapadilla</Text>
      </Link>
    </Container>
  );
}
