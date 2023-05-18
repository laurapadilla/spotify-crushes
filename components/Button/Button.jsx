import { useEffect, useState, useCallback } from "react";
import { Text } from "../Text";
import { LoginButton } from "./styles";

export function Button({ fetchUser }) {
  const [button, showButton] = useState(true);
  // const [token, setToken] = useState("");
  const client_id = `ad2c7654ff92405c949de032535da426`;
  const redirect_uri = `https://www.top40fm.xyz/`;
  const scopes = `user-top-read`;
  const AUTHORIZATION_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`;

  // METHOD 1

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

  // METHOD 2

  // const login = () => {
  //   let popup = window.open(
  //     AUTHORIZATION_URL,
  //     "Login with Spotify",
  //     "width=800,height=600"
  //   );
  //   window.spotifyCallback = (payload) => {
  //     console.log("there");
  //     popup.close();
  //     getTracks(payload);
  //   };
  // };

  // const getTracks = async (payload) => {
  //   fetch(
  //     "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=40&offset=0",
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${payload}`,
  //       },
  //     }
  //   )
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
  //       console.log("logged in");
  //       fetchUser({ tracks });
  //     });
  // };

  // useEffect(() => {
  //   const token = window.location.hash.substr(1).split("&")[0].split("=")[1];
  //   if (token) {
  //     window.opener.spotifyCallback(token);
  //   }
  // }, []);

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   let token = window.localStorage.getItem("token");

  //   if (!token && hash) {
  //     token = hash
  //       .substr(1)
  //       .split("&")[0]
  //       .find((elem) => elem.startsWith("access_token"))
  //       .split("=")[1];

  //     window.location.hash = "";
  //     window.localStorage.setItem("token", token);
  //   }
  //   setToken(token);
  // }, []);

  // const logout = () => {
  //   setToken("");
  //   // window.localStorage.removeItem("token");
  // };

  // METHOD 3
  // const login = () => {
  //   let popup = window.open(
  //     AUTHORIZATION_URL,
  //     "Login with Spotify",
  //     "width=800,height=600"
  //   );
  //   window.spotifyCallback = () => {
  //     console.log("there");
  //     popup.close();

  //     const token = window.location.hash.substr(1).split("&")[0].split("=")[1];
  //     if (token) {
  //       window.opener.spotifyCallback(token);
  //     }
  //   };
  // };

  // const getTracks = useCallback(() => {
  //   if (token) {
  //     fetch(
  //       "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=40&offset=0",
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     )
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         const { items } = data;
  //         showButton(false);
  //         const tracks = items.map((track) => ({
  //           id: track.id,
  //           album: track.album.name,
  //           albumURL: track.album.external_urls.spotify,
  //           albumImg: track.album.images[0],
  //           artist: track.artists.map((_artist) => _artist.name).join(", "),
  //           artistURL: track.artists
  //             .map((_artist) => _artist.external_urls.spotify)
  //             .join(", "),
  //           songUrl: track.external_urls.spotify,
  //           title: track.name,
  //         }));
  //         console.log(items);
  //         console.log("hi");
  //         fetchUser({ tracks });
  //       });
  //   } else {
  //     // Logged out view logic
  //     console.log("logged out");
  //   }
  // }, [token, fetchUser]);

  // useEffect(() => {
  //   getTracks();
  // }, [getTracks]);

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
