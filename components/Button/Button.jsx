import { useEffect, useState } from "react";
import { Text } from "../Text";
import { LoginButton } from "./styles";

export function Button({ fetchUser }) {
  const [button, showButton] = useState(true);
  const client_id = `ad2c7654ff92405c949de032535da426`;
  const redirect_uri = `https://www.top40fm.xyz/`;
  const scopes = `user-top-read`;
  const AUTHORIZATION_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`;

  const login = () => {
    let popup = window.open(
      AUTHORIZATION_URL,
      "Login with Spotify",
      "width=800,height=600"
    );
    window.spotifyCallback = () => {
      console.log("there");
      popup.close();
      getTracks(token);
    };
  };

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    // getToken()

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const getTracks = async (token) => {
    const response = await fetch(AUTHORIZATION_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { items } = data;
        showButton(false);
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
        console.log(items);
        console.log("hi");
        fetchUser({ tracks });
      });
  };

  // useEffect(() => {
  //   const token = window.location.hash.substr(1).split("&")[0].split("=")[1];
  //   if (token) {
  //     window.opener.spotifyCallback(token);
  //   }
  // }, []);

  return (
    <>
      {!token ? (
        <LoginButton as="a" href={AUTHORIZATION_URL}>
          <Text fontFamily="sansMedium" size={2}>
            Login with Spotify to see your Top 40!
          </Text>
        </LoginButton>
      ) : (
        <button onClick={logout}>logout!</button>
      )}
    </>
  );
}
