import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import {Route} from "react-router-dom";
import styled from "styled-components";


export default function App() {
  return (
    <All>
      <Header />
      <Route exact path ="/" component={WelcomePage}/>
      <Route path = "/characters" component={CharacterList}/>
    </All>
  );
}

const All = styled.main`
font-family: 'Roboto Mono', monospace;
color: #fff;
`;