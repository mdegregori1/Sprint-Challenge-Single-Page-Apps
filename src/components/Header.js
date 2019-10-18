import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <Header1 className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to ="/" className="ui-centered">Home</Link>
      <Link to="/characters" className="ui-centered">Characters</Link>
    </Header1>
  );
}

//styling 
const Header1 = styled.header`
background-color: #36454f;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 2%;
color: #fff;
`