import React from "react";
import styled from "styled-components";

export default function Login() {
  const hanleClick = () => {
    const clientId = "81fc683c3da847a9b2c4e0ed3ba50ec0";
    const redirectUri = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scopes = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-read-playback-position',
      'user-top-read',
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
        " "
    )}&response_type=token&show_dialog=true`;  
    };

  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt=""
      />
      <button onClick={hanleClick}>Connect Spotify</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    cursor: pointer;
    background-color: black;
    color: #49f585;
    font-size: 1.4rem;
  }
`;
