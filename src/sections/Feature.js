import React from 'react';
import styled from 'styled-components';
import TranslationCard from '../components/TranslationCard';

const Feature = (props) => {
  return (
    <Features>
      <Description>
        <Header>{props.header}</Header>
        <Paragraph>{props.paragraph}</Paragraph>
      </Description>
      <TranslationCard />
    </Features>
  )
};

const Features = styled.div`
  box-shadow: 0.2em 0.2em 0.6em 0.1em rgba(0, 0, 0, 0.2);
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  max-width: 76em;
  width: 80%;
  min-width: 24em;
  margin: 2em 0em;
  padding: 1rem;
  position: relative;
  z-index: 500;
  @media only Screen and (max-width: 60em) {
    /* padding: 0.5rem 1.5rem; */
    display: flex;
    background-color: lightblue;
    align-items: center;
    justify-items: center;
    flex-direction: row;
    min-width: 18em;
  }
  @media only Screen and (max-width: 48em) {
    /* padding: 0.5rem 1.5rem; */
    display: flex;
    background-color: red;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    min-width: 17em;
  }
  @media only Screen and (max-width: 30em) {
    /* padding: 0.5rem 3rem; */
    display: flex;
    background-color: green;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    min-width: 18em;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Header = styled.h2`
  margin: 1em 1em 2em 1em;
`;
const Paragraph = styled.p`
  margin: 0em 3em 0em 1.5em;
`;

export default Feature;