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

const Heros = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 5rem;
  margin: 3rem;
  background-color: var(--gl3);
  color: var(--white);
  position: relative;
  z-index: 500;
  box-shadow: 0.2em 0.2em 0.6em 0.1em rgba(0, 0, 0, 0.2);
  @media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
  }
`;

export default Hero;