import React from 'react';
import styled from 'styled-components';

const Button = ({text, link}) => {
  return (
    <ButtonSt>{text}</ButtonSt>
  )
}

const ButtonSt = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  height: 2em;
  width: auto;
  border-radius: 0.5em;
  margin-bottom: 1em;
`;

export default Button;