import React from 'react';
import styledComponents from 'styled-components';

const BubbleSpeech = ({text}) => {
  return (
    <BubbleSpeechSt>{text}</BubbleSpeechSt>
  )
}

const BubbleSpeechSt = styledComponents.div`
  align-items: center;
  background: var(--gl2);
  display: flex;
  font-size: 1.3em;
  font-weight: bold;
  justify-content: center;
  position: relative;
  height: 4em;
  margin: 1em;
  width: auto;
  padding: 2em;
  border-radius: 0.4em;
  &:after {
    border: 0.6em solid transparent;
    border-right-color: var(--gl2);
    border-left: 0;
    border-bottom: 0;
    content: ' ';
    height: 0;
    left: 0;
    margin-top: -0.3px;
    margin-left: -0.6em;
    position: absolute;
    top: 50%;
    width: 0;
  }
`;

export default BubbleSpeech;