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
  const [cefr, setCefr] = useState('a1');
  const [pagination, setPagination] = useState('?page=');
  const [page, setPage] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(()=>{
    async function retrieveTexts() {
      // Bearer Token for API request
      const config = {
        headers: { Authorization: `Bearer ${props.credentials.token}` }
      };
      // console.log('cefr: ', cefr);
      // console.log('pagination: ', pagination);
      // console.log('page: ', page);
      try {
        let res = null;
        let cefr_url = {cefr};
        // console.log('cefr_url: ', cefr_url.cefr);
        if(page === 1) {
          res = await axios.get(
            'http://localhost:8000/api/texts/cefr/'+cefr_url.cefr,
            config
          );
        } else {
          let cefr_url = {cefr};
          let pagination_url = {pagination};
          let page_url = {page};
          res = await axios.get(
            'http://localhost:8000/api/texts/cefr/'
            +cefr_url.cefr
            +pagination_url.pagination
            +page_url.page,
            config
          );
        }
        // console.log('res.data.data[0]', res.data.data[0]);
        setText(res.data.data[0].text);
        setNextPageUrl(res.data.next_page_url);
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
  }, [page]);

  const nextText = () => {
    console.log('nextText!');
    console.log('nextPageUrl: ', nextPageUrl);
    console.log('page before increment: ', page);
    if(nextPageUrl != null) {
      setPage(page+1);
      console.log('page: ', page);
    }
  }

  return (
    <>
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
      <Button onClick={() => nextText()}>Next</Button>
    </>
  );
}

const TranslateEnEsSt = styled.div`
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
  width: auto;
`;

export default connect((state) => ({
  credentials: state.credentials,
  textid: state.textid,
  hitrate: state.hitrate,
}))(TranslateEnEs);