import React from 'react';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BubbleSpeech from '../components/BubbleSpeech';
import Paragraph from '../components/Paragraph';
import CompleteProfile from '../sections/CompleteProfile';

const Profile = (props) => {
  let navigate = useNavigate();

  return (
    <>
      <BubbleSpeech text={`Hey ${props.credentials.user.first_name}!`} />
      
      <h1>Profile</h1>

      <CompleteProfile headerText='Please, complete your profile to start practicing!' />

      <RegisterSt>
        <HeaderSection>Test your skill level (CEFR)</HeaderSection>
        <Button>Test your skill level</Button>
      </RegisterSt>

      <RegisterSt>
        <HeaderSection>Are you ready to practice?</HeaderSection>
        <Button onClick={() => navigate('/practice/en-es')}>Translate from English to Spanish</Button>
        <Button onClick={() => navigate('/practice/es-en')}>Translate from Spanish to English</Button>
      </RegisterSt>

      <RegisterSt>
        <HeaderSection>Edit your profile</HeaderSection>
        <Paragraph text='You can easily update your data.'></Paragraph>
        <Button onClick={() => navigate('/profile/edit')}>Edit</Button>
      </RegisterSt>

      <RegisterSt>
        <HeaderSection>Delete your profile</HeaderSection>
        <Paragraph text='You will loose all your progress but you will be able to re-register at a later time.'></Paragraph>
        <Button onClick={() => navigate('/profile/delete')}>Delete</Button>
      </RegisterSt>
    </>
  )
}
// Styled components

const Button = styled.a`
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

const RegisterSt = styled.div`
  box-shadow: 0.2em 0.2em 0.6em 0.1em rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em 2em 1em 1em;
  max-width: 76em;
  /* min-height: 20em; */
  min-width: 76em;
  padding: 2em;
  @media only Screen and (max-width: 60em) {
    min-width: 45em;
    max-width: 45em;
    margin-bottom: 40em;
  }
  @media only Screen and (max-width: 48em) {
    min-width: 40em;
    max-width: 40em;
    margin-bottom: 25em;
  }
  @media only Screen and (max-width: 30em) {
    min-width: 20em;
    max-width: 20em;
    margin-bottom: 4em;
  }
`;

const HeaderSection = styled.h2`
  margin-bottom: 2em;
`;

export default connect((state) => ({
  credentials: state.credentials
}))(Profile);