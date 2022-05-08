import React from 'react';
import styled from 'styled-components';
import TranslationCard from '../components/TranslationCard';

const Feature = ({header, paragraph}) => {
  return (
    <Features>
      <h2>{header}</h2>
      <p>{paragraph}</p>
      <TranslationCard />
    </Features>
  )
};

const Features = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3rem;
  padding: 1rem 5rem;
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

export default Feature;