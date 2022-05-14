import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { TEXT_CEFR, TEXT_DIFFICULTY, TEXT_TYPE } from '../store/types';
import axios from 'axios';
import styled from 'styled-components';
import TranslationCard from '../sections/TranslationCard';
import TranslationCheck from '../sections/TranslationCheck';

const TranslateEnEs = (props) => {
  const [text, setText] = useState('');
  const [cefr, setCefr] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(()=>{
    async function retrieveTexts() {
      const config = {
        headers: { Authorization: `Bearer ${props.credentials.token}` }
      };
  
      try {
        let res = await axios.get(
          'http://localhost:8000/api/texts/cefr/a1',
          config
        );
        // console.log(res.data.data[0]);
        setText(res.data.data[0].text);
        setCefr(res.data.data[0].cefr);
        props.dispatch({type: TEXT_CEFR, payload: res.data.data[0].cefr});
        setDifficulty(res.data.data[0].difficulty);
        props.dispatch({type: TEXT_DIFFICULTY, payload: res.data.data[0].difficulty});
        setType(res.data.data[0].type);
        props.dispatch({type: TEXT_TYPE, payload: res.data.data[0].type});
        // console.log(res.data.data[0].author_id);
        let aut = await axios.get(
          'http://localhost:8000/api/texts/author/' + 
          res.data.data[0].author_id, config
        );
        // console.log('aut.data.author', aut);
        setAuthor(aut.data.author);
      } catch (error) {
        console.log('error: ', error.response.data.message);
      }
    }
    retrieveTexts();
  }, [props.credentials.token]);

  return (
    <TranslateEnEsSt>
      <TranslationCard
        text={text}
        author={author}
      />
      <TranslationCheck />
    </TranslateEnEsSt>
  );
}

const TranslateEnEsSt = styled.div`
  display: flex;
  flex-direction: row;
`;

export default connect((state) => ({
  credentials: state.credentials,
  text: state.text,
}))(TranslateEnEs);