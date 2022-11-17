import Container from "../Container";
import Image from "next/image";

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
        padding: "1rem",
        alignItems: "center",
        justifyContent: "center",
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
            <h2>
              <a href={song.songUrl}>{song.title}</a>
            </h2>
            <p>
              {song.artist} | {song.album}
            </p>
          </article>
        );
      })}
    </Container>
  );
}
