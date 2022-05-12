import React from 'react';
import styled from 'styled-components';
import Author from '../components/Author';
import Text from '../components/Text';

const TextTop = (props) => {
  return (
    <TextTopSt>
        <Text text='Great things are not done by impulse, but by a series of small things brought together.' />
        <Author author='Vincent Van Gogh' />
    </TextTopSt>
  )
}

const TextTopSt = styled.div`
  display: flex;
  background-color: #fff;
  border: 0.1em solid rgb(255, 165, 0, 0.5);
  border-radius: 1em;
  border-bottom: none;
  flex-grow: 1;
  justify-content: space-between;
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