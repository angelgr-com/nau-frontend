import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

const TranslationBottom = (props) => {
  // Hooks
  const [userTranslation, setUserTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handlers
  const fillData = (e) => {
    setUserTranslation(e.target.value);
  };
  // console.log('userTranslation', userTranslation);

  return (
    <TranslationBottomSt>
      <div>
        <InputTranslationSt
          id="user_translation"
          name="user_translation"
          placeholder="Translate here the above text"
          title="user_translation"
          type='text'
          onInput={(e)=>{fillData(e)}}
        />
        {isLoading && <Info>Processing your request...</Info>}
        {isChecked && <Info>Text checked successfully.</Info>}
        {isWrong && <Error>{errorMessage} {isWrong}</Error>}
      </div>
      {/* <ButtonsTranslation /> */}
      <Button>Check</Button>
    </TranslationBottomSt>
  )
}

// Styled components

const Button = styled.a`
  align-items: center;
  background-color: orange;
  border-radius: 0.5em;
  cursor: pointer;
  display: flex;
  height: 2em;
  justify-content: center;
  margin-bottom: 1em;
  width: auto;
`;

const TranslationBottomSt = styled.div`
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

const Error = styled.div`
  color: red;
`;
const Info = styled.div`
  color: green;
`;
const InputTranslationSt = styled.textarea`
  border-radius: 0.5em;
  border: 0.1em solid var(--bl1);
  min-height: 8em;
  min-width: 21em;
  margin-top: 1em;
  width: 90%;
`;

export default TranslationBottom