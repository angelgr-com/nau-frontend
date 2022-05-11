import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components';

const RegisterForm = () => {
  // To redirect user after register
  let navigate = useNavigate();
  
  // Hooks
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(()=>{}, []);
  useEffect(()=>{});

  const initialValues = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  const validationSchema = Yup.object({
    first_name: Yup.string()
                   .required('Required')
                   .max(50),
    last_name: Yup.string()
                  .required('Required')
                  .max(50),
    username: Yup.string()
                 .required('Required')
                 .max(50),
    email: Yup.string()
              .email()
              .required('Required'),
    password: Yup.string()
                 .required('Required')
                 .min(8)
                 .max(50),
    password_confirmation: Yup.string()
                .required('Required')
                .max(50),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: values => {
     alert(JSON.stringify(values, null, 2));
    },
  });

  // Handler
  const fillData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value})
  };

  const userRegistration = async () => {
    setIsLoading(true);
    let body = {
      first_name: userData.first_name,
      last_name: userData.last_name,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      password_confirmation: userData.password_confirmation
    }
    if (body.password !== body.password_confirmation) {
      setErrorMessage('The password confirmation does not match');
      setIsWrong(true);
      return;
    }
    try {
      setIsWrong(false);
      let result = await axios.post('http://localhost:8000/api/users', body);
      // console.log('result: ', result);
      setIsLoading(false);
      setIsRegistered(true);
      setTimeout(()=>{
        navigate('/login');
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      // console.log('axios error: ', error);
      setErrorMessage(error.response.data.message);
      setIsWrong(true);
      // console.log('axios errorMessage: ', error.response.data.message);
    }
  }

  return (
    <RegisterSt>
      {/* {<pre>{JSON.stringify(userData, null,2)}</pre>} */}
      <h1>Register to access your profile</h1>
      <p>Already have an account? <a href='/login'>Sign in</a></p>
      <form id="register" method="post" autoComplete="on">
        <label>First Name: </label>
        <FirstNameSt
          autoComplete="given-name"
          id="first_name"
          name="first_name"
          onChange={formik.handleChange}
          onInput={(e)=>{fillData(e)}}
          placeholder="First Name"
          title="first_name"
          type="text"
          value={formik.values.first_name}
        />
        {formik.errors.first_name ?
          <Error>{formik.errors.first_name}</Error> : null
        }
        <label>Last Name: </label>
        <LastNameSt
          autoComplete="family-name"
          name="last_name"
          id="last_name"
          title="last_name"
          type="text"
          placeholder="Last Name"
          onChange={formik.handleChange}
          onInput={(e)=>{fillData(e)}}
          value={formik.values.last_name}
        />
        {formik.errors.last_name ?
          <Error>{formik.errors.last_name}</Error> : null
        }
        <label>Username: </label>
        <InputSt
          autoComplete="username"
          id="username"
          name="username"
          onChange={formik.handleChange}
          onInput={(e)=>{fillData(e)}}
          placeholder='Choose your username'
          title="username"
          type="text"
          value={formik.values.username}
        />
        {formik.errors.username ?
            <Error>{formik.errors.username}</Error> : null
        }
        <label>Email: </label>
        <InputSt
          autoComplete="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onInput={(e)=>{fillData(e)}}
          placeholder="Email"
          title="email"
          type="email"
          value={formik.values.email}
        />
        {formik.errors.email ?
            <Error>{formik.errors.email}</Error> : null
        }
        <label>Password: </label>
        <InputSt
          autoComplete="new_password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onInput={(e)=>{fillData(e)}}
          placeholder="Password"
          title="password"
          type="password"
          value={formik.password}
        />
        {formik.errors.password ?
            <Error>{formik.errors.password}</Error> : null
        }
        <label>Confirm password: </label>
        <InputSt
          autoComplete="new-password"
          id="password_confirmation"
          name="password_confirmation"
          onChange={formik.handleChange}
          onInput={(e)=>{fillData(e)}}
          placeholder="Repeat password"
          title="password_confirmation"
          type="password"
          value={formik.password_confirmation}
        />
        {formik.errors.password_confirmation ?
            <Error>{formik.password_confirmation}</Error> : null
        }
        {isLoading && <Info>Processing your request...</Info>}
        {isRegistered && <Info>You are now successfully registered. Please, login.</Info>}
        {isWrong && <Error>{errorMessage} {isWrong}</Error>}
      <Button type="submit" onClick={() => userRegistration()}>Sign Up</Button>
      </form>
      <p>By clicking this button, you agree to Naulan's <a href='/login'>Terms of Use</a> and <a href='/login'>Privacy Policy</a></p>
        
    </RegisterSt>
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

const FirstNameSt = styled.input`
width: 45%;
`;

const LastNameSt = styled.input`
width: 45%;
`; 

const InputSt = styled.input`
margin-bottom: 1em;
`;

export default RegisterForm;