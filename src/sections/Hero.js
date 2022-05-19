import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import HeaderSection from '../components/HeaderSection';
import Paragraph from '../components/Paragraph';

const Hero = (props) => {
  let navigate = useNavigate();
  
  // Render without credentials
  if (!props.credentials?.token) {
    return (
      <HeroSt>
        <HeaderSection text='Practice your writing skills' />
        <Paragraph text='Great things are not done by impulse, but by a series of small things brought together.' />
        <Author>Vincent Van Gogh</Author>
        <Button onClick={() => navigate('/register')}>
          Register to start practicing
        </Button>
      </HeroSt>
    )
  // Render with credentilas
  } else {
    return (
      <HeroSt>
        <HeaderSection text='Practice your writing skills' />
        <Paragraph text='Great things are not done by impulse, but by a series of small things brought together.' />
        <Author>Vincent Van Gogh</Author>
        <Button
          onClick={() => navigate('/practice/en-es')}
        >Start practicing
        </Button>
      </HeroSt>
    )
  }

}

const Author = styled.div`
  font-weight: bold;
  margin-bottom: 1em;
`;
const Button = styled.a`
  align-items: center;
  background-color: orange;
  border-radius: 0.5em;
  cursor: pointer;
  display: flex;
  height: 3em;
  justify-content: center;
  margin-bottom: 1em;
  text-align: center;
  width: 9em;
`;
const HeroSt = styled.div`
  box-shadow: 0.2em 0.2em 0.6em 0.1em rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3rem;
  max-width: 80em;
  padding: 1rem 5rem;
  position: relative;
  z-index: 500;
  @media only Screen and (max-width: 48em) {
    padding: 0.5rem 1.5rem;
    flex-direction: column;
  }
  @media only Screen and (max-width: 30em) {
    padding: 0.5rem 3rem;
  }
`;

export default connect((state) => ({
  credentials: state.credentials
}))(Hero);