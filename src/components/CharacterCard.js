import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  return (
    <Character>
      <h2>{props.name}</h2>
      <p>Status - {props.status}</p>
      <p>Species - {props.species}</p>
      <img src={props.image}/>
    </Character>
  )
}

const Character = styled.div`
text-align: center;
padding: 2%;
margin: 2%;
background-color: #36454f;
border-radius: 30px;
`;