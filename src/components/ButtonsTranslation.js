import React from 'react';
import styled from 'styled-components';

const ButtonsTranslation = () => {

  return (
    <ButtonsTranslationSt>
      <Delete><a href="#">Delete</a></Delete>
      <Copy><a href="#">Copy</a></Copy>
      <Save><a href="#">Check!</a></Save>
    </ButtonsTranslationSt>
  )
};

const ButtonsTranslationSt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 1em;
`;
const Delete = styled.div`
  align-items: center;
  background-color: rgb(255,0,0,0.2);
  display: flex;
  flex-direction: row;
  font-size: 0.8em;
  justify-content: center;
  margin: 0.5em 0.25em 0.5em 0.25em;
  height: 2em;
  width: 4em;
`;
const Copy = styled.div`
  align-items: center;
  background-color: rgb(255, 165, 0, 0.3);
  display: flex;
  flex-direction: row;
  font-size: 0.8em;
  justify-content: center;
  margin: 0.5em 0.25em 0.5em 0.25em;
  height: 2em;
  width: 4em;
`;
const Save = styled.div`
  align-items: center;
  background-color: rgb(0,255,0,0.3);
  display: flex;
  flex-direction: row;
  font-size: 0.8em;
  justify-content: center;
  margin: 0.5em 0.25em 0.5em 0.25em;
  height: 2em;
  width: 4em;
`;

export default ButtonsTranslation;