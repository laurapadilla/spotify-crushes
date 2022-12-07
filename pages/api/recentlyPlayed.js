import { getTopTracks } from "../../lib/spotify";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_, res) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.map((track) => ({
    id: track.id,
    album: track.album.name,
    albumURL: track.album.external_urls.spotify,
    albumImg: track.album.images[0],
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    artistURL: track.artists
      .map((_artist) => _artist.external_urls.spotify)
      .join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  console.log("recentlyPlayed tracks", tracks);

  return res.status(200).json({ tracks });
};
