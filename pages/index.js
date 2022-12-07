import Head from "next/head";
import Image from "next/image";
import { Button, Header, TopTracks, Text } from "../components";
import { useState, useEffect } from "react";
import useUser from "../hooks/use-user";
import Container from "../components/Container";
import { Footer } from "../components/Footer";

export default function Home() {
  const [user, fetchUser] = useState(null);

  const { data, isLoading } = useUser();
  const songs = user ? user.tracks : data?.tracks;

  return (
    <>
      <Head>
        <title>TOP40.FM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        as="main"
        css={{
          padding: "1rem",
        }}
      >
        <Header />
        <Container
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
            marginBottom: "3rem",
          }}
        >
          <Text style="subhead">
            This is what {user ? "YOU" : "I"} have been listening to the last 6
            months
          </Text>
        </Container>
        <Container
          css={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
            marginBottom: "4rem",
          }}
        >
          <Button fetchUser={fetchUser} />
        </Container>
        {isLoading ? (
          "loading..."
        ) : (
          <>
            <TopTracks songs={songs} />
          </>
        )}
        <Footer />
      </Container>
    </>
  );
}
