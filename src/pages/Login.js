import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { LOGIN } from '../store/types';
import styled from 'styled-components';
import BubbleSpeech from '../components/BubbleSpeech';

const Login = (props) => {
  // To redirect user after register
  let navigate = useNavigate();
  
  // Hooks
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(()=>{}, []);
  useEffect(()=>{});

  // Handlers
  const fillData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value})
  };

  const userLogin = async () => {
    setIsLoading(true);
    let body = {
      email: userData.email,
      password: userData.password,
    }

    try {
      let result = await axios.post('https://quiet-shelf-00426.herokuapp.com/api/users/login', body);
      setIsLoading(false);
      setIsLogged(true);
      props.dispatch({type:LOGIN, payload: result.data});
      setTimeout(()=>{
        navigate('/profile');
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.response.data.message);
      setIsWrong(true);
    }
  }

  return (
    <LoginSt>
      <BubbleSpeech text='Hi! Welcome back' />
      <h1>Login to access your profile</h1>
      <p>Don't have an account? <a href='/register'>Sign Up</a></p>
      <form id="login" method="post" autoComplete="on">
        <div>
          <label>Email: </label>
          <InputSt
            autoComplete="email"
            id="email"
            name="email"
            placeholder="Email"
            title="email"
            type="email"
            onInput={(e)=>{fillData(e)}}
          />
        </div>
        <div>
          <label>Password: </label>
          <InputSt
            autoComplete="new_password"
            id="password"
            name="password"
            placeholder="Password"
            title="password"
            type="password"
            onInput={(e)=>{fillData(e)}}
          />
        </div>
        <p><a href='/login'>Forgot password?</a></p>
        {isLoading && <Info>Processing your request...</Info>}
        {isLogged && <Info>Login successful.</Info>}
        {isWrong && <Error>{errorMessage} {isWrong}</Error>}
        <Button onClick={() => userLogin()}>Sign In</Button>
      </form>
    </LoginSt>
  )
}

// Styled components

const Error = styled.div`
  color: red;
`;
const Info = styled.div`
  color: green;
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

export default connect()(Login);