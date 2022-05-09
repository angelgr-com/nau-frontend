import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Heros>
      <h1>Practice writing skills</h1>
      <p>Great things are not done by impulse, but by a series of small things brought together.</p>
      <p>Vincent Van Gogh</p>
      <button>Start practicing</button>
    </Heros>
  )
}

const Heros = styled.div`
  box-shadow: 0.2em 0.2em 0.6em 0.1em rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3rem;
  max-width: 80em;
  padding: 1rem 5rem;
  position: relative;
  z-index: 500;
  @media only Screen and (max-width: 48em) {
    padding: 0.5rem 1.5rem;
    flex-direction: column;
  }
  @media only Screen and (max-width: 30em) {
    padding: 0.5rem 3rem;
  }
`;

export default Hero;