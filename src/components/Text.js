import React from 'react'
import styled from 'styled-components';

const Text = (props) => {
  return (
    <TextSt>{props.text}</TextSt>
  )
}

const TextSt = styled.div`
  background-color: var(--bl3);
  border-radius: 0.5em;
  border: 0.1em dotted var(--gd2);
  font-style: italic;
  padding: 0.4em;
  text-align: center;
  margin: 1em;
  @media only Screen and (max-width: 60em) {
    width: 15em;
  }
  @media only Screen and (max-width: 48em) {
    width: 17em;
  }
  @media only Screen and (max-width: 30em) {
    width: 10em;
  }
`;

export default Text;