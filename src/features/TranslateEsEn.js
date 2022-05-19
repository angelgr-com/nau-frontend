import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { TEXTID, SUBMITED } from '../store/types';
import axios from 'axios';
import styled from 'styled-components';
import TranslationCard from '../sections/TranslationCard';
import TranslationCheck from '../sections/TranslationCheck';

const TranslateEsEn = (props) => {
  const [text, setText] = useState('');
  const [text_id, setText_Id] = useState('');
  const [enEs, setEnEs] = useState('');
  const [cefr, setCefr] = useState('A1');
  const [page, setPage] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');
  const [author, setAuthor] = useState('');
  const [isTextSubmited, setIsTextSubmited] = useState(false);

  useEffect(()=>{
    async function retrieveTexts() {
      // Bearer Token for API request
      const config = {
        headers: { Authorization: `Bearer ${props.credentials.token}` }
      };
      // Load texts by CEFR level
      try {
        let res = null;
        let cefr_url = {cefr};
        if(page === 1) {
          res = await axios.get(
            'https://quiet-shelf-00426.herokuapp.com/api/texts/cefr/'+cefr_url.cefr,
            config
          );
        } else {
          let cefr_url = {cefr};
          let pagination_url = '?page=';
          let page_url = {page};
          res = await axios.get(
            'https://quiet-shelf-00426.herokuapp.com/api/texts/cefr/'
            +cefr_url.cefr
            +pagination_url
            +page_url.page,
            config
          );
        }
        setNextPageUrl(res.data.next_page_url);
        setText_Id(res.data.data[0].id);
        props.dispatch({type: TEXTID, payload: res.data.data[0].id});
        setCefr(res.data.data[0].cefr);
        setDifficulty(res.data.data[0].difficulty);
        setType(res.data.data[0].type);
        let aut = await axios.get(
          'https://quiet-shelf-00426.herokuapp.com/api/texts/author/' + 
          res.data.data[0].author_id, config
        );
        setAuthor(aut.data.author);
        let tra = await axios.get(
          'https://quiet-shelf-00426.herokuapp.com/api/texts/en-es/' + 
          res.data.data[0].id, config
        );
        // Set Spanish text
        setText(tra.data.esText);
        // Set English text
        setEnEs(res.data.data[0].text);
      } catch (error) {
        console.log('error: ', error.response.data.message);
      }
    }
    retrieveTexts();
  }, [page]);


  const nextText = () => {
    setIsTextSubmited(false);
    props.dispatch({type: SUBMITED, payload: isTextSubmited});
    let level = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    if(nextPageUrl != null) {
      setPage(page+1);
    } else {
      let index = level.indexOf(cefr);
      if(index+1 <= level.length) {
        setCefr(level[index+1]);
      } else {
        console.log('This was the last text to translate')
      }
      setPage(1);
    }
  }

  const showTranslationCheck = () => {
    if(isTextSubmited) {
      return (
        <TranslationCheck
          enEs={enEs}
          cefr={cefr}
          difficulty={difficulty}
          type={type}
          author={author}
        />
      );
    }
  };

  const showAnswer = () => {
    setIsTextSubmited(!isTextSubmited);
  };

  return (
    <>
      <TranslateEsEnSt>
        <TranslationCard
          language="English"
          text={text}
          text_id={text_id}
          author={author}
        />
        {showTranslationCheck()}
      </TranslateEsEnSt>
      <Button onClick={() => showAnswer()}>Show answer</Button>
      <Button onClick={() => nextText()}>Next</Button>
    </>
  );
}

// Styled components
const TranslateEsEnSt = styled.div`
  display: flex;
  flex-direction: row;
  @media only Screen and (max-width: 60em) {
    min-width: 15em;
  }
  @media only Screen and (max-width: 48em) {
    padding: 1.5rem;
  }
  @media only Screen and (max-width: 30em) {
    flex-direction: column;
  }
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
  width: 8em;
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

export default connect((state) => ({
  credentials: state.credentials,
  textid: state.textid,
  hitrate: state.hitrate,
  submited: state.submited,
}))(TranslateEsEn);