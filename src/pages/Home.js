import React from 'react';
import styled from 'styled-components';
import Feature from '../sections/Feature';
import Hero from '../sections/Hero';

const Home = () => {
  const feature = [
    {
      header: 'Translate small texts to practice languages',
      paragraph: 'Select a language and translate it from Spanish to English or vice versa!',
    },
    {
      header: 'Get immediate results and check your hit rate!',
      paragraph: 'If you register, you will be able to review your translations and their corrections to keep improving.',
    },
    {
      header: 'Request a review of your translation if you believe it is correct',
      paragraph: 'A native language expert will review it and give you feedback.',
    },
    {
      header: 'This is just the beggining...',
      paragraph: 'We will continue to improve the service and will be happy to hear what you are missing.',
    }
  ];

  return (
    <Features>
      <Hero />
      <Feature
        header={feature[0].header}
        paragraph={feature[0].paragraph}
        reverse={false}
        />
      <Feature
        header={feature[1].header}
        paragraph={feature[1].paragraph}
        reverse={true}
      />
      <Feature
        header={feature[2].header}
        paragraph={feature[2].paragraph}
      />
      <Feature
        header={feature[3].header}
        paragraph={feature[3].paragraph}
      />
    </Features>
  )
}

const Features = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  & :nth-child(odd){
    flex-direction: row-reverse;
  }
  & :nth-child(1){
    flex-direction: column;
  }
  @media only Screen and (max-width: 48em) {
    & :nth-child(odd){
      flex-direction: column;
    }
  }
  @media only Screen and (max-width: 30em) {
    padding: 0.5rem 2rem;
  }
`;

export default Home;