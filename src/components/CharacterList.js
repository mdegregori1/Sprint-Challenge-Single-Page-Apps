import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";


export default function CharacterList() {
  const [characters, setCharacters ] = useState(null);
  //state for search results 
  const [query, setQuery] = useState("");

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      const newCharacters = response.data.results;
      const data = newCharacters.filter(character => 
        character.name.toLowerCase().includes(query.toLowerCase())
        );
      console.log("new", newCharacters);
      setCharacters(data);
    })
    .catch(error => {
      console.log("error retrieving api data!", error);
    })
  }, [query]);

  if(characters === null ){
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    )
  }
  return (
    <Container className="character-list">
        <form>
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          placeholder="Search for Characters"
        />
        </form>
    
        {characters.map(e =>(
          <CharacterCard
          id={e.id}
          name={e.name}
          status={e.status}
          species={e.species}
          image={e.image}
          />
        ))}
    </Container>
  );
}

//styling 

const Container = styled.section`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;