import React from 'react';
import styled from 'styled-components';
import TextTop from '../components/TextTop';
import TranslationCardBottom from '../components/TranslationCardBottom';


const Feature = (props) => {
  return (
    <Features>
      <Description>
        <Header>{props.header}</Header>
        <Paragraph>{props.paragraph}</Paragraph>
      </Description>
      <TranslationCardSt>
        <TextTop
          text='The merit of all things lies in their difficulty.'
        />
        <TranslationCardBottom />
      </TranslationCardSt>
    </Features>
  )
};

const TranslationCardSt = styled.div`
  align-items: center;
  border-radius: 2em;
  border: 0.15em solid var(--gl1);
  box-shadow: 0.2em 0.2em 0.6em 0.1em rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em 2em 1em 1em;
  min-height: 20em;
  min-width: 24em;
  padding: 2em;
  @media only Screen and (max-width: 60em) {
    min-width: 18em;
  }
  @media only Screen and (max-width: 48em) {
    min-width: 20em;
    margin: 1em 1em 1em 1em;
  }
  @media only Screen and (max-width: 30em) {
    min-width: 14em;
    margin: 1em 1em 1em 1em;
  }
`;

const Features = styled.div`
  box-shadow: 0.2em 0.2em 0.6em 0.1em rgba(0, 0, 0, 0.2);
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  margin: 2em 0em;
  max-width: 76em;
  min-width: 24em;
  padding: 1rem;
  position: relative;
  width: 80%;
  z-index: 500;
  @media only Screen and (max-width: 60em) {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-items: center;
    min-width: 18em;
  }
  @media only Screen and (max-width: 48em) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-items: center;
    min-width: 17em;
  }
  @media only Screen and (max-width: 30em) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-items: center;
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