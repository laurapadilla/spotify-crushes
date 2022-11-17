import { useEffect, useState } from "react";
import { LoginButton } from "./styles";

export function Button({ fetchUser }) {
  const [button, showButton] = useState(true);
  const client_id = `ad2c7654ff92405c949de032535da426`;
  const redirect_uri = `https://spotify-crushes.vercel.app/`;
  const scopes = `user-top-read`;
  const AUTHORIZATION_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`;

  const login = () => {
    let popup = window.open(
      AUTHORIZATION_URL,
      "Login with Spotify",
      "width=800,height=600"
    );
    window.spotifyCallback = (payload) => {
      console.log("there");
      popup.close();
      fetch(
        "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=40&offset=0",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${payload}`,
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { items } = data;
          const tracks = items.map((track) => ({
            id: track.id,
            album: track.album.name,
            albumImg: track.album.images[0],
            artist: track.artists.map((_artist) => _artist.name).join(", "),
            songUrl: track.external_urls.spotify,
            title: track.name,
          }));
          console.log(items);
          console.log("hi");
          fetchUser({ tracks });
        });
    };
  };

  useEffect(() => {
    const token = window.location.hash.substr(1).split("&")[0].split("=")[1];
    if (token) {
      window.opener.spotifyCallback(token);
    }
  }, []);

  return (
    <>
      <LoginButton as="button" onClick={login}>
        Login to see YOUR top songs!
      </LoginButton>
    </>
  );
}
