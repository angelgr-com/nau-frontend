import React from 'react';
import styled from 'styled-components';


const TranslationCard = () => {
  return (
    <TranslationCards>
      <TextTop>
        
      </TextTop>
      <TranslationBottom>

      </TranslationBottom>
    </TranslationCards>
  )
}

const TranslationCards = styled.div`
  align-items: center;
  border-radius: 2em;
  border: 0.2em solid var(--bl2);
  box-shadow: 0.2em 0.2em 0.6em 0.1em rgba(0, 0, 0, 0.2);
  display: flex;
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

const TextTop = styled.div`
  background-color: var(--bl3);
  min-height: 10em;
  width: 20em;
  @media only Screen and (max-width: 60em) {
    width: 15em;
  }
  @media only Screen and (max-width: 48em) {
    width: 17em;
  }
  @media only Screen and (max-width: 30em) {
    width: 12em;
  }
  `;
const TranslationBottom = styled.div`
  background-color: var(--gl2);
  min-height: 10em;
  width: 20em;
  @media only Screen and (max-width: 60em) {
    width: 15em;
  }
  @media only Screen and (max-width: 48em) {
    width: 17em;
  }
  @media only Screen and (max-width: 30em) {
    width: 12em;
  }
`;

export default TranslationCard;