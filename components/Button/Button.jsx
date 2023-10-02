import { useEffect, useState, useCallback } from "react";
import { Text } from "../Text";
import { LoginButton } from "./styles";
import querystring from "querystring";

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
    window.spotifyCallback = (payload) => {
      console.log("there");
      popup.close();
      fetch(
        "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=40&offset=0",
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
          console.log("logged in");
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

  const revokeToken = async (refreshToken) => {
    const client_id = "ad2c7654ff92405c949de032535da426";
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString(
      "base64"
    );

    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${basic}`,
        },
        body: querystring.stringify({
          grant_type: "refresh_token",
          refreshToken,
        }),
      });

      if (response.ok) {
        return true; // Token successfully revoked
      }
    } catch (error) {
      console.error("Error revoking token:", error);
    }

    return false;
  };

  const disconnectFromSpotify = async () => {
    // const refreshToken =
    //   "AQAZaO0UJ-ZTbetqC_94X-ii9-rRt4CstEp4zYof1XD-sT9sTCgAQlBorEIVXvv6WoiKFGgrT0JwsoICS9MJ4cs1zMiH5LUyHRX-HlG-hIQNKJ1AHjjpQf26Hu-QJpFmUrQ";

    const { refreshToken } = await revokeToken();

    // if (success) {
    //   alert("Successfully disconnected from Spotify");
    // } else {
    //   alert("Failed to disconnect from Spotify");
    // }
    console.log("logged out", refreshToken);
  };

  return (
    <>
      {button ? (
        <LoginButton as="button" onClick={login}>
          <Text fontFamily="sansMedium" size={2}>
            Login with Spotify to see your Top 40!
          </Text>
        </LoginButton>
      ) : (
        <button onClick={disconnectFromSpotify}>Disconnect from Spotify</button>
      )}
    </>
  );
}
