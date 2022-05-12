import React from 'react';
import styled from 'styled-components';
import TextTop from '../components/TextTop';
import TranslationCheckBottom from '../components/TranslationCheckBottom';

const TranslationCheck = (props) => {
  return (
    <TranslationCheckSt>
      <TextTop
        text='Las grandes cosas no se hacen por impulso, sino por una serie de pequeñas cosas reunidas.'
        author='Vincent Van Gogh'
      />
      <TranslationCheckBottom />
    </TranslationCheckSt>
  )
}

const TranslationCheckSt = styled.div`
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

export default TranslationCheck;