import React from 'react'
import styled from 'styled-components';

const Text = (props) => {
  return (
    <TextSt>{props.text}</TextSt>
  )
}

const TextSt = styled.div`
  background-color: var(--bl3);
  border: 0.1em dotted var(--gd2);
  font-style: italic;
  padding: 0.4em;
  text-align: center;
  margin: 1em;
`;

export default Text;