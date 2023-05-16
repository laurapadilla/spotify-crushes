import { useEffect, useState } from "react";
import { Text } from "../Text";
import { LoginButton } from "./styles";

export function Button({ fetchUser }) {
  const [button, showButton] = useState(true);
  // const [token, setToken] = useState("");

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
      popup.close();

      fetch(
        `https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=50`,
        {
          headers: {
            "Content-Type": "application/json",
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
          const genres = Array.from(
            new Set(items.map((item) => item.genres).flat())
          );
          const artists = items.map((item) => ({
            artist: item.name,
            image: item.images[1].url,
            url: item.external_urls["spotify"],
          }));

          fetchUser({ artists, genres });
        });
    };
  };

  useEffect(() => {
    const token = window.location.hash.substr(1).split("&")[0].split("=")[1];
    if (token) {
      window.opener.spotifyCallback(token);
    }
  }, []);

  // const login = () => {
  //   let popup = window.open(
  //     AUTHORIZATION_URL,
  //     "Login with Spotify",
  //     "width=800,height=600"
  //   );
  //   window.spotifyCallback = () => {
  //     console.log("there");
  //     popup.close();
  //     getTracks();
  //   };
  // };

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   let token = window.localStorage.getItem("token");

  //   // getToken()

  //   if (!token && hash) {
  //     token = hash
  //       .substring(1)
  //       .split("&")
  //       .find((elem) => elem.startsWith("access_token"))
  //       .split("=")[1];

  //     window.location.hash = "";
  //     window.localStorage.setItem("token", token);
  //   }

  //   setToken(token);
  // }, []);

  // const logout = () => {
  //   setToken("");
  //   window.localStorage.removeItem("token");
  // };

  // const getTracks = async () => {
  //   const response = await fetch(AUTHORIZATION_URL, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const { items } = data;
  //       showButton(false);
  //       const tracks = items.map((track) => ({
  //         id: track.id,
  //         album: track.album.name,
  //         albumURL: track.album.external_urls.spotify,
  //         albumImg: track.album.images[0],
  //         artist: track.artists.map((_artist) => _artist.name).join(", "),
  //         artistURL: track.artists
  //           .map((_artist) => _artist.external_urls.spotify)
  //           .join(", "),
  //         songUrl: track.external_urls.spotify,
  //         title: track.name,
  //       }));
  //       console.log(items);
  //       console.log("hi");
  //       fetchUser({ tracks });
  //     });
  // };

  return (
    <>
      {button ? (
        <LoginButton as="button" onClick={login}>
          <Text fontFamily="sansMedium" size={2}>
            Login with Spotify to see your Top 40!
          </Text>
        </LoginButton>
      ) : null}
    </>
  );
}
