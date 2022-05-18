import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { LOGIN } from '../store/types';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components';

const RegisterForm = (props) => {
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
  const [passwordError, setPasswordError] = useState('');
  
  useEffect(()=>{
    if (userData.password !== userData.password_confirmation) {
      setPasswordError('The password confirmation does not match');
      setIsWrong(true);
      return;
    } else {
      setIsWrong(false);
    }
  }, [userData]);
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
                   .matches(/^([a-z\xC0-\uFFFF]{1,50}[ ºª\-']{0,2}){1,2}$/i, "invalid name")
                   .matches(/^(?!admin)/i, 'admin is not a valid user name')
                   .min(2, "must be at least 2 characters")
                   .max(50),
    username: Yup.string()
                 .required('required')
                 .matches(/^([a-z\xC0-\uFFFF]{1,50}[ .ºª\-']{0,2}){1,2}$/i, "invalid name")
                 .matches(/^(?!admin)/i, 'admin is not a valid user name')
                 .min(2, "must be at least 2 characters")
                 .max(50),
    email: Yup.string()
              .email()
              .matches(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)
              .min(8)
              .max(66)
              .required('required'),
    password: Yup.string()
                 .required('required')
                 .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+-]).{8,32}$/, "minimum eight characters with at least one upper case, one lower case, one number and one special character (#?!@$%^&*+-)")
                 .min(8)
                 .max(32),
    password_confirmation: Yup.string()
                .required('required')
                .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+-]).{8,32}$/, "minimum eight characters with at least one upper case, one lower case, one number and one special character (#?!@$%^&*+-)")
                .min(8)
                .max(32),
  });

  // const formik = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: validationSchema,
  //   onSubmit: values => {
  //    alert(JSON.stringify(values, null, 2));
  //   },
  // });

  // Handlers
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

    try {
      // setIsWrong(false);
      const res = await axios.post('https://quiet-shelf-00426.herokuapp.com/api/users', body);
      setIsLoading(false);
      setIsRegistered(true);
      props.dispatch({type:LOGIN, payload: res.data});
      setTimeout(()=>{
        navigate('/profile');
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      // setErrorMessage(error.response.data.message);
      // setIsWrong(true);
    }
  }

  return (
    <RegisterSt>
      {/* {<pre>{JSON.stringify(userData, null,2)}</pre>} */}
      <h1>Register to access your profile</h1>
      <p>Already have an account? <a href='/login'>Sign in</a></p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form id="register" method="post" autoComplete="on">
          <Group>
            <LabelGroup>
              <label htmlFor="first_name">First Name: </label>
              <ErrorMessage name="first_name" render={msg => <div style={errorM}>{msg}</div>} />
            </LabelGroup>
            <Field
              as={InputSt}
              autoComplete="given-name"
              name="first_name"
              onInput={(e)=>{fillData(e)}}
              placeholder="First Name"
              type="text"
            />
          </Group>
          <Group>
            <LabelGroup>
              <label htmlFor="username">Username: </label>
              <ErrorMessage name="username" render={msg => <div style={errorM}>{msg}</div>} />
            </LabelGroup>
            <Field
              as={InputSt}
              autoComplete="username"
              name="username"
              onInput={(e)=>{fillData(e)}}
              placeholder='Choose your username'
              type="text"
            />
          </Group>
          <Group>
            <LabelGroup>
              <label htmlFor="email">Email: </label>
              <ErrorMessage name="email" render={msg => <div style={errorM}>{msg}</div>} />
            </LabelGroup>
            <Field
              as={InputSt}
              autoComplete="email"
              name="email"
              onInput={(e)=>{fillData(e)}}
              placeholder="Email"
              type="email"
            />
          </Group>
          <Group>
            <LabelGroup>
              <label htmlFor="password">Password: </label>
              <ErrorMessage name="password" render={msg => <div style={errorM}>{msg}</div>} />
            </LabelGroup>
            <Field
              as={InputSt}
              autoComplete="new_password"
              name="password"
              onInput={(e)=>{fillData(e)}}
              placeholder="Password"
              type="password"
            />
          </Group>
          <Group>
            <LabelGroup>
              <label htmlFor="password_confirmation">Confirm password: </label>
              <ErrorMessage name="password_confirmation" render={msg => <div style={errorM}>{msg}</div>} />
            </LabelGroup>
            <Field
              as={InputSt}
              autoComplete="new-password"
              name="password_confirmation"
              onInput={(e)=>{fillData(e)}}
              placeholder="Repeat password"
              type="password"
            />
          </Group>
          {isWrong && <Error>{passwordError}</Error>}
          {isLoading && <Info>Processing your request...</Info>}
          {isRegistered && <Info>You are now successfully registered. Please, login.</Info>}
          <Button type="submit" onClick={() => userRegistration()}>Sign Up</Button>
        </Form>
      </Formik>
      <p>By clicking this button, you agree to Naulan's <a href='/login'>Terms of Use</a> and <a href='/login'>Privacy Policy</a></p>
        
    </RegisterSt>
  )
}
  
// Styled components
const Group = styled.div`
  display: flex;
  flex-direction: column;
`;
const LabelGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const Info = styled.div`
  color: green;
`;

const Error = styled.div`
  color: orange;
  margin-left: 0.5em;
`;
const errorM = {
  color: 'orange',
  marginLeft: '0.5em',
  maxWidth: '20em'
};

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
  align-content: center;
  box-shadow: 0.2em 0.2em 0.6em 0.1em rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em 2em 1em 1em;
  max-width: 76em;
  min-height: 20em;
  padding: 2em;
  @media only Screen and (max-width: 60em) {
    min-width: 30em;
    max-width: 45em;
    margin-bottom: 40em;
  }
  @media only Screen and (max-width: 48em) {
    min-width: 30em;
    max-width: 40em;
    margin-bottom: 25em;
  }
  @media only Screen and (max-width: 30em) {
    min-width: 20em;
    max-width: 20em;
    margin-bottom: 4em;
  }
`;

// const LastNameSt = styled.input`
// width: 45%;
// `; 

const InputSt = styled.input`
margin-bottom: 1em;
`;

export default connect()(RegisterForm);