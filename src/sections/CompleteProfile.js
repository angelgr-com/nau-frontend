import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import Paragraph from '../components/Paragraph';

const CompleteProfile = (props) => {

  // Hooks
  const [languagesList, setLanguagesList] = useState([]);
  const [countriesList, setCountriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [country, setCountry] = useState('');
  const [nativeLanguage, setNativeLanguage] = useState('');
  const [studyingLanguage, setstudyingLanguage] = useState('');

  useEffect(() => {
    async function getLanguagesList() {
      const config = {
        headers: { Authorization: `Bearer ${props.credentials.token}` }
      };
      try {
        const res = await axios.get('https://quiet-shelf-00426.herokuapp.com/api/texts/languages', config);
        setLanguagesList(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getLanguagesList();
  }, [props.credentials.token]);

  useEffect(() => {
    async function getCountriesList() {
      const config = {
        headers: { Authorization: `Bearer ${props.credentials.token}` }
      };
      try {
        const res = await axios.get('https://quiet-shelf-00426.herokuapp.com/api/texts/countries', config);
        setCountriesList(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCountriesList();
  }, [props.credentials.token]);

  const completeProfile = async () => {
    setIsLoading(true);
    setIsProfileComplete(false);
    setIsWrong(false);
    setErrorMessage('');
    let body = {
      country: country,
      native_language: nativeLanguage,
      studying_language: studyingLanguage
    }
    const config = {
      headers: { Authorization: `Bearer ${props.credentials.token}` }
    };
    try {
      setIsWrong(false);
      const res = await axios.post('https://quiet-shelf-00426.herokuapp.com/api/users/profile/add-data', body, config);
      setIsLoading(false);
      setIsProfileComplete(true);
    } catch (error) {
      setIsWrong(true);
      setIsLoading(false);
      setErrorMessage(error.response.data.message);
    }
  }
    
  return (
    <>
      <RegisterSt>
        <HeaderSection>
          {props.headerText}
        </HeaderSection>
        <Paragraph text='What country are you from?'></Paragraph>
        <CountryNameSt
          name="country"
          id="country"
          placeholder='Select country'
          default='Spain'
          onChange={(e)=>{setCountry(e.target.value)}}>
        {countriesList.map((option, i) => (
            <option key={i} value={option.value}>{option.label}</option>
          ))}
        </CountryNameSt>
        <Paragraph text='Which is your native language?'></Paragraph>
        <StudentLanguageSt
          name="nativeLanguage"
          id="nativeLanguage"
          onChange={(e)=>{setNativeLanguage(e.target.value)}}
        >
          {languagesList.map((option, i) => (
            <option key={i} value={option.value}>{option.label}</option>
          ))}
        </StudentLanguageSt>
        <Paragraph text='Which language do you want to practice?'></Paragraph>
        <StudentLanguageSt
          name="studyLanguage"
          id="studyLanguage"
          onChange={(e)=>{setstudyingLanguage(e.target.value)}}
        >
          <option value="Select language" defaultValue disabled>Select language</option>
          <option value="Spanish">Spanish</option>
          <option value="English">English</option>
        </StudentLanguageSt>
        {isLoading && <Info>Processing your request...</Info>}
        {isProfileComplete && <Info>Your profile is successfully complete.</Info>}
        {isWrong && <Error>{errorMessage} {isWrong}</Error>}
        <Button type="submit" onClick={() => completeProfile()}>Save</Button>
      </RegisterSt>
    </>
  );
}

// Styled components
const Info = styled.div`
  color: green;
`;

const Error = styled.div`
  color: red;
`;

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
    min-width: 16em;
    max-width: 16em;
    margin-bottom: 4em;
  }
`;

const CountryNameSt = styled.select`
  width: 45%;
`;

const HeaderSection = styled.h2`
  margin-bottom: 2em;
`;

const StudentLanguageSt = styled.select`
  margin-bottom: 1em;
`;

export default connect((state) => ({
  credentials: state.credentials
}))(CompleteProfile);