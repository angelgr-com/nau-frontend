import React from 'react';
import styled from 'styled-components';
import TranslationCard from '../sections/TranslationCard';
import TranslationCheck from '../sections/TranslationCheck';

const TranslateEnEs = (props) => {
  return (
    <TranslateEnEsSt>
      <TranslationCard
        text='Great things are not done by impulse, but by a series of small things brought together.'
        author='Vincent Van Gogh'
      />
      <TranslationCheck />
    </TranslateEnEsSt>
  );
}

const TranslateEnEsSt = styled.div`
  display: flex;
  flex-direction: row;
`;

export default TranslateEnEs;