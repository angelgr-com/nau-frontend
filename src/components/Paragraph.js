import React from 'react';
import styled from 'styled-components';

const Paragraph = ({text}) => {
  return (
    <ParagraphSt>{text}</ParagraphSt>
  )
}

const ParagraphSt = styled.p`
  margin-bottom: 1em;
`;

export default Paragraph;