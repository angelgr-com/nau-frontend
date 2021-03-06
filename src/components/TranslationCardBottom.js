import React, { useState } from 'react';
import { connect } from 'react-redux';
import { HITRATE, SUBMITED } from '../store/types';
import axios from 'axios';
import styled from 'styled-components';

const TranslationBottom = (props) => {
  // Hooks
  const [userTranslation, setUserTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTextSubmited, setIsTextSubmited] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Handlers
  const fillData = (e) => {
    setUserTranslation(e.target.value);
  };
  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };
  const resetInputField = () => {
    setInputValue("");
  };


  const saveTranslation = async () => {
    const config = {
      headers: { Authorization: `Bearer ${props.credentials.token}` }
    };
    setIsTextSubmited(true);
    props.dispatch({type: SUBMITED, payload: isTextSubmited});
  
    let body = {
      language: props.language,
      text: userTranslation,
      text_id: props.textid,
    }

    try {
      setIsLoading(true);
      let res = await axios.post(
        'https://quiet-shelf-00426.herokuapp.com/api/texts/translation',
        body,
        config
      );
      
      props.dispatch({type: HITRATE, payload: res.data.translation.hit_rate});
      setIsLoading(false);
    } catch (error) {
      console.log('error: ', error.response.data.message);
    }
  }

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
          value={inputValue}
          onChange={handleUserInput}
        />
        {isLoading && <Info>Processing your request...</Info>}
      </div>
      <Group>
        <ButtonTransp onClick={ resetInputField }>Delete</ButtonTransp>
        <Button onClick={() => saveTranslation()}>Check</Button>
      </Group>
    </TranslationBottomSt>
  )
}

// Styled components
const Group = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.a`
  align-items: center;
  background-color: orange;
  border-radius: 0.5em;
  cursor: pointer;
  display: flex;
  height: 2em;
  justify-content: center;
  margin-bottom: 1em;
  margin-left: 0.5em;
  width: 5em;
`;
const ButtonTransp = styled.a`
  align-items: center;
  background-color: rgb(248, 165, 1, 0.5);
  border-radius: 0.5em;
  cursor: pointer;
  display: flex;
  height: 2em;
  justify-content: center;
  margin-bottom: 1em;
  margin-left: 0.5em;
  width: 5em;
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

const Info = styled.div`
  color: green;
`;
const InputTranslationSt = styled.textarea`
  border-radius: 0.5em;
  border: 0.1em solid var(--bl1);
  padding: 0.25em;
  min-height: 8em;
  min-width: 21em;
  margin-top: 1em;
  width: 90%;
  @media only Screen and (max-width: 60em) {
    min-width: 15em;
  }
  @media only Screen and (max-width: 48em) {
    min-width: 18em;
  }
  @media only Screen and (max-width: 30em) {
    min-width: 12em;
  }
`;

export default connect((state) => ({
  credentials: state.credentials,
  textid: state.textid,
  hitrate: state.hitrate,
}))(TranslationBottom);