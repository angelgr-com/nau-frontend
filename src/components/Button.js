import React from 'react';
import styled from 'styled-components';

const Button = ({text, link}) => {
  return (
    <ButtonSt>{text}</ButtonSt>
  )
}

const ButtonSt = styled.a`
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

export default Button;