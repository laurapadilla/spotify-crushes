import { useEffect, useState } from "react";

export default function Button({ fetchUser }) {
  const [button, setToken] = useState("");
  const [token, showButton] = useState(true);
  const client_id = `ad2c7654ff92405c949de032535da426`;
  const redirect_uri = `http%3A%2F%2Flocalhost%3A3000`;
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
      fetch("https://api.spotify.com/v1/me/top/tracks", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { items } = data;
          showButton(false);
          const tracks = items.map((track) => ({
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
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

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

    if (token) {
      window.opener.spotifyCallback(token);
    }
    console.log(token);
  }, []);

  return (
    <button onClick={login} style={{ display: button ? "block" : "none" }}>
      logginnnn
    </button>
  );
}
