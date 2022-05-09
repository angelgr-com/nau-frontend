import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <RegisterSt>
      <h1>Register to access your profile</h1>
      <p>Already have an account? <a href='/login'>Sign in</a></p>
      <NameSt>
        <FirstNameSt placeholder='First name' />
        <LastNameSt placeholder='Last name' />
      </NameSt>
      <InputSt type='text' placeholder='username' />
      <InputSt type='email' placeholder='email' />
      <InputSt type='password' placeholder='password' />
      <p>By clicking this button, you agree to Naulan's <a href='/login'>Terms of Use</a> and <a href='/login'>Privacy Policy</a></p>
      <button>Sign Up</button>
    </RegisterSt>
  )
}

const RegisterSt = styled.div`
  box-shadow: 0.2em 0.2em 0.6em 0.1em rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em 2em 1em 1em;
  max-width: 76em;
  min-height: 20em;
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

const NameSt = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 1em;
`;

const FirstNameSt = styled.input`
  width: 45%;
`;

const LastNameSt = styled.input`
  width: 45%;
`; 

const InputSt = styled.input`
  margin-bottom: 1em;
`;

export default Login;