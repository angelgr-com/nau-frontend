import React from 'react';
import styled from 'styled-components';

const HeaderSection = ({text}) => {
  return (
    <HeaderSectionSt>{text}</HeaderSectionSt>
  )
}

const HeaderSectionSt = styled.h2`
  margin-bottom: 2em;
`;

export default HeaderSection;