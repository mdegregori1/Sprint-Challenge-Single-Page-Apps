import React from "react";
import styled from "styled-components";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Top>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Top>
    </section>
  );
}

const Top = styled.header`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 3%;

`