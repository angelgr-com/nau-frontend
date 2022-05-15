import React from 'react';
import styled from 'styled-components';
import Author from '../components/Author';
import Text from '../components/Text';

const TextTop = (props) => {
  return (
    <TextTopSt>
        <Text text={props.text} />
        <Author author={props.author} />
    </TextTopSt>
  )
}

const TextTopSt = styled.div`
  align-items: center;
  background-color: #fff;
  border: 0.1em solid rgb(255, 165, 0, 0.5);
  border-radius: 1em;
  border-bottom: none;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
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

export default TextTop