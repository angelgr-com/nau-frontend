import React from 'react'
import styled from 'styled-components';

const Text = ({text}) => {
  return (
    <TextSt>{text}</TextSt>
  )
}

const TextSt = styled.div`
  background-color: var(--bl3);
  border: 0.1em dotted var(--gd2);
  font-style: italic;
  padding: 0.4em;
  margin: 1em;
`;

export default Text;