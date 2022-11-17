import Container from "../Container";
import Image from "next/image";
import { Text } from "../Text";
import { keyframes } from "../../stitches.config";

const changeGB = keyframes({
  "0%": {
    boxShadow: "#ff1312 0 0 20px 5px",
  },
  "25%": {
    boxShadow: "#fbff12 0 0 20px 5px",
  },
  "50%": {
    boxShadow: "#12ff12 0 0 20px 5px",
  },
  "75%": {
    boxShadow: "#1038ff 0 0 20px 5px",
  },
  "95%": {
    boxShadow: "#d010ff 0 0 20px 5px",
  },
  "100%": {
    boxShadow: "#ff1312 0 0 20px 5px",
  },
});

export function TopTracks({ songs }) {
  return (
    <Container
      as="section"
      css={{
        background: "#eee",
        border: "1px solid black",
        boxShadow: "0 0 20px 5px #093CF2",
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr));",
        gap: "2rem",
        maxHeight: "60vh",
        height: "100%",
        overflow: "auto",
        padding: "1.5rem",
        alignItems: "center",
        justifyContent: "center",
        marginX: "2rem",
        animation: `${changeGB} 8s ease infinite`,
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
