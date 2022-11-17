import Container from "../Container";
import Image from "next/image";
import { Text } from "../Text";

export function TopTracks({ songs }) {
  return (
    <Container
      as="section"
      css={{
        background: "#eee",
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr));",
        height: "60vh",
        overflow: "auto",
        border: "1px solid black",
        padding: "1.5rem",
        alignItems: "center",
        justifyContent: "center",
        marginX: "2rem",
      }}
    >
      {songs.map((song, index) => {
        return (
          <article key={song.id}>
            <Image
              alt={song.album}
              src={song.albumImg.url}
              width={350}
              height={350}
            />
            <Text as="p" style="songTitle" size={1.75}>
              <a href={song.songUrl}>{song.title}</a>
            </Text>
            <Container as="span">
              <Text as="span" style="songArtist">
                {song.artist}
              </Text>{" "}
              /{" "}
              <Text as="span" style="songAlbum">
                {song.album}
              </Text>
            </Container>
          </article>
        );
      })}
    </Container>
  );
}
