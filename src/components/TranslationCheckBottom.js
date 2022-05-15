import React from 'react'
import styled from 'styled-components';
import ButtonsTranslation from './ButtonsTranslation';
import InputTranslation from './InputTranslation';

const TranslationCheckBottom = (props) => {
  return (
    <TranslationBottomSt>
    <div>
      <ul>
        <li><b>Hit rate: </b>{}</li>
        <li><b>CEFR: </b>{props.cefr}</li>
        <li><b>Difficulty: </b>{props.difficulty}</li>
        <li><b>Type: </b>{props.type}</li>
      </ul>
    </div>
  </TranslationBottomSt>
  )
}

const TranslationBottomSt = styled.div`
  align-items: center;
  border: 0.1em solid rgb(255, 165, 0, 0.5);
  border-radius: 1em;
  background-color: var(--bl3);
  display: flex;
  justify-content: center;
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

export default TranslationCheckBottom;