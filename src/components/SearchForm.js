import React from "react";
import styled from "styled-components";

export default function SearchForm(props) {
  console.log('props passed', props)
 
  return (
    <section className="search-form">
        <form>
        <Input1
          type="text"
          onChange={props.handleInputChange}
          value={props.setQuery}
          name="name"
          tabIndex="0"
          placeholder="Search for Characters"
        />
        </form>
    </section>
  );
}

const Input1= styled.input`
padding: 4% 10%;
`;