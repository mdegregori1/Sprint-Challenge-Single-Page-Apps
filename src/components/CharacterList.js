import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from "./SearchForm";


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
        <h1>Loading up characters now...</h1>
      </div>
    )
  }
  return (
    <div>
        <Search>
          <SearchForm handleInputChange={handleInputChange}/>
        </Search>
    <Container className="character-list">
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
    </div>

  );
}

//styling 

const Container = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

const Search = styled.div`
display: flex;
justify-content: center;
align-items: center;
`