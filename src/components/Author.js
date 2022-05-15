import React from 'react';
import styled from 'styled-components';

const Author = (props) => {
  return (
    <AuthorSt>{props.author}</AuthorSt>
  )
};

const AuthorSt = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-style: italic;
  font-weight: bold;
  justify-content: flex-end;
  padding: 0.25em;
  @media only Screen and (max-width: 60em) {
    width: 15em;
  }
  @media only Screen and (max-width: 48em) {
    width: 17em;
  }
  @media only Screen and (max-width: 30em) {
    width: 5em;
  }
`;

export default Author;