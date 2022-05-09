import React from 'react';
import styled from 'styled-components';

const Author = ({name}) => {
  return (
    <AuthorSt>{name}</AuthorSt>
  )
};

const AuthorSt = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-style: italic;
  font-weight: bold;
  justify-content: flex-end;
  padding: 1em;
`;

export default Author;