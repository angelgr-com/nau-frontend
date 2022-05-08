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
  height: 16em;
  width: 20em;
  margin: 1em;
  padding: 1em;
  box-shadow: 0.2em 0.2em 0.6em 0.1em rgba(0, 0, 0, 0.2);
`;

const TextTop = styled.div`
  background-color: var(--gl3);
  height: 7em;
  `;
const TranslationBottom = styled.div`
  background-color: var(--gl2);
  height: 7em;
`;

export default TranslationCard;