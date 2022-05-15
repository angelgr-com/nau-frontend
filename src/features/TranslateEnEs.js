import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { TEXTID } from '../store/types';
import axios from 'axios';
import styled from 'styled-components';
import TranslationCard from '../sections/TranslationCard';
import TranslationCheck from '../sections/TranslationCheck';

const TranslateEnEs = (props) => {
  const [text, setText] = useState('');
  const [text_id, setText_Id] = useState('');
  const [enEs, setEnEs] = useState('');
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
        // console.log('res.data.data[0]', res.data.data[0]);
        setText(res.data.data[0].text);
        // console.log('res.data.data[0].text', res.data.data[0].text);
        setText_Id(res.data.data[0].id);
        props.dispatch({type: TEXTID, payload: res.data.data[0].id});
        setCefr(res.data.data[0].cefr);
        setDifficulty(res.data.data[0].difficulty);
        setType(res.data.data[0].type);
        let aut = await axios.get(
          'http://localhost:8000/api/texts/author/' + 
          res.data.data[0].author_id, config
        );
        // console.log('aut.data.author', aut);
        setAuthor(aut.data.author);
        let tra = await axios.get(
          'http://localhost:8000/api/texts/en-es/' + 
          res.data.data[0].id, config
        );
        // console.log('aut.data.author', aut);
        setEnEs(tra.data.esText);
      } catch (error) {
        console.log('error: ', error.response.data.message);
      }
    }
    retrieveTexts();
  }, []);

  return (
    <TranslateEnEsSt>
      <TranslationCard
        text={text}
        text_id={text_id}
        author={author}
      />
      <TranslationCheck
        enEs={enEs}
        cefr={cefr}
        difficulty={difficulty}
        type={type}
        author={author}
      />
    </TranslateEnEsSt>
  );
}

const TranslateEnEsSt = styled.div`
  display: flex;
  flex-direction: row;
`;

export default connect((state) => ({
  credentials: state.credentials,
  textid: state.textid,
  hitrate: state.hitrate,
}))(TranslateEnEs);