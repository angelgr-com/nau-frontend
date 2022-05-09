import React from 'react';
import styled from 'styled-components';
import BubbleSpeech from '../components/BubbleSpeech';
import Button from '../components/Button';

const Login = () => {
  return (
    <LoginSt>
      <BubbleSpeech text='Hi! Welcome back' />
      <h1>Login to access your profile</h1>
      <p>Don't have an account? <a href='/register'>Sign Up</a></p>
      <InputSt type='email' placeholder='email' />
      <InputSt type='password' placeholder='password' />
      <p><a href='/login'>Forgot password?</a></p>
      <Button text='Sign In'></Button>
    </LoginSt>
  )
}

const LoginSt = styled.div`
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

const InputSt = styled.input`
  margin-bottom: 1em;
`;

export default Login;