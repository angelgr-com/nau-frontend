import React from 'react';
import styled from 'styled-components';

const InputTranslation = () => {
  return (
    <InputTranslationSt type='text' />
  )
};

const InputTranslationSt = styled.textarea`
  border-radius: 0.5em;
  border: 0.1em solid var(--bl1);
  min-height: 8em;
  min-width: 21em;
  margin-top: 1em;
  width: 90%;
`;

export default InputTranslation;