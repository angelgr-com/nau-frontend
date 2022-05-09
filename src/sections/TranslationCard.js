import React from 'react';
import styled from 'styled-components';
import Author from '../components/Author';
import ButtonsTranslation from '../components/ButtonsTranslation';
import InputTranslation from '../components/InputTranslation';
import Text from '../components/Text';

const TranslationCard = () => {
  return (
    <TranslationCardSt>
      <TextTop>
        <Text text='Great things are not done by impulse, but by a series of small things brought together.'/>
        <Author name='Vincent Van Gogh'/>
      </TextTop>
      <TranslationBottom>
        <div>
          <InputTranslation />
        </div>
        <ButtonsTranslation />
      </TranslationBottom>
    </TranslationCardSt>
  )
}

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

const TextTop = styled.div`
  display: flex;
  background-color: #fff;
  border: 0.1em solid rgb(255, 165, 0, 0.5);
  border-radius: 1em;
  border-bottom: none;
  flex-grow: 1;
  justify-content: space-between;
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
  align-items: center;
  border: 0.1em solid rgb(255, 165, 0, 0.5);
  border-radius: 1em;
  background-color: var(--bl3);
  display: flex;
  flex-direction: column;
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