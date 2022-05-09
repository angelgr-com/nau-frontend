import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const Profile = () => {
  return (
    <>
      <h1>Profile</h1>
      <RegisterSt>
        <HeaderSection>Please, complete your profile to start practicing!</HeaderSection>
        <CountrySt>
        <p>What country are you from?</p>
          <CountryNameSt placeholder='Select country' />
          <CountryCodeSt placeholder='Two letters code' />
        </CountrySt>
        <p>Which is your native language?</p>
        <StudentLanguageSt placeholder='Select languge' />
        <p>Which language do you want to learn?</p>
        <StudentLanguageSt placeholder='Select languge' />
        <Button text='Save' />
      </RegisterSt>

      <RegisterSt>
        <HeaderSection>Test your skill level (CEFR)</HeaderSection>
        <Button text='Test your skill level' />
      </RegisterSt>

      <RegisterSt>
        <HeaderSection>Are you ready to practice?</HeaderSection>
        <Button text='Translate from English to Spanish' />
        <Button text='Translate from Spanish to English' />
      </RegisterSt>
    </>
  )
}

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

const CountrySt = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 1em;
`;

const CountryNameSt = styled.input`
  width: 45%;
`;

const CountryCodeSt = styled.input`
  width: 45%;
`;

const HeaderSection = styled.h2`
  margin-bottom: 2em;
`;

const StudentLanguageSt = styled.select`
  margin-bottom: 1em;
`;

export default Profile;