import React, { useState } from 'react';
import { connect } from 'react-redux';
import { HITRATE, SUBMITED } from '../store/types';
import axios from 'axios';
import styled from 'styled-components';

const TranslationBottom = (props) => {
  // Hooks
  const [userTranslation, setUserTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isTextSubmited, setIsTextSubmited] = useState(false);


  // Handlers
  const fillData = (e) => {
    setUserTranslation(e.target.value);
  };
  // console.log('userTranslation', userTranslation);

  const saveTranslation = async () => {
    // console.log('props: ', props)
    const config = {
      headers: { Authorization: `Bearer ${props.credentials.token}` }
    };
    console.log('setIsTextNotSubmited: false');
    setIsTextSubmited(true);
    props.dispatch({type: SUBMITED, payload: isTextSubmited});
  
    let body = {
      language: 'Spanish',
      text: userTranslation,
      text_id: props.textid,
    }
    // console.log('TranslationCardBottom body: ', body);
    // console.log('props.textid: ', props.textid);
    // console.log('props: ', props);

    try {
      setIsLoading(true);
      let res = await axios.post(
        'http://localhost:8000/api/texts/translation',
        body,
        config
      );
      // console.log('res: ', res);
      
      props.dispatch({type: HITRATE, payload: res.data.translation.hit_rate});
      // console.log('props hit_rate: ', props);
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
        />
        {isLoading && <Info>Processing your request...</Info>}
        {isWrong && <Error>{errorMessage} {isWrong}</Error>}
      </div>
      <Button onClick={() => saveTranslation()}>Check</Button>
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

const Error = styled.div`
  color: red;
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