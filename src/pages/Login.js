import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { LOGIN } from '../store/types';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
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
  const [reportError, setReportError] = useState('');

  // Handlers
  const fillData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value})
  };

  // Form initial values to validate data
  const initialValues = {
    email: '',
    password: '',
  };

  // Form data validation with Yup
  const validationSchema = Yup.object({
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
  });

  // Check if Formik has detected errors
  let errorsForm = {};
  const FormValidation = () => {
    // Grab values and submitForm from useFormikContext
    const { errors } = useFormikContext();
    errorsForm = errors;
  };

  const userLogin = async () => {
    setIsWrong(false);
    // If all errors detected by Formik are solved
    if(!(errorsForm.email || errorsForm.password)) {
      setIsLoading(true);

      let body = {
        email: userData.email,
        password: userData.password,
      }

      try {
        if(body){
          let result = await axios.post('https://quiet-shelf-00426.herokuapp.com/api/users/login', body);
          setIsWrong(false);
          setIsLoading(false);
          setIsLogged(true);
          props.dispatch({type:LOGIN, payload: result.data});
          setTimeout(()=>{
            navigate('/profile');
          }, 2000);
        } else {
          setIsLoading(false);
          setReportError('Please, solve errors before submit');
          setIsWrong(true);
        }
      } catch (error) {
        setIsLoading(false);
        setReportError(error.response.data.message);
        setIsWrong(true);
      }
    }
  }

  return (
    <LoginSt>
      <BubbleSpeech text='Hi! Welcome back' />
      <h1>Login to access your profile</h1>
      <p>Don't have an account? <a href='/register'>Sign Up</a></p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form id="login" method="post" autoComplete="on">
          <Group>
            <LabelGroup>
              <label>Email: </label>
              <ErrorMessage name="email" render={msg => <div style={errorM}>{msg}</div>} />
            </LabelGroup>
            <Field
              as={InputSt}
              autoComplete="email"
              id="email"
              name="email"
              placeholder="Email"
              title="email"
              type="email"
              onInput={(e)=>{fillData(e)}}
            />
          </Group>
          <Group>
            <LabelGroup>
              <label>Password: </label>
              <ErrorMessage name="password" render={msg => <div style={errorM}>{msg}</div>} />
            </LabelGroup>
            <Field
              as={InputSt}
              autoComplete="new_password"
              id="password"
              name="password"
              placeholder="Password"
              title="password"
              type="password"
              onInput={(e)=>{fillData(e)}}
            />
          </Group>
          <p><a href='/login'>Forgot password?</a></p>
          {isLoading && <Info>Processing your request...</Info>}
          {isLogged && <Info>Login successful.</Info>}
          {isWrong && <Error>{reportError}</Error>}
          <FormValidation />
          <Button type="submit" onClick={() => userLogin()}>Sign In</Button>
        </Form>
      </Formik>
    </LoginSt>
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
const errorM = {
  color: 'orange',
  marginLeft: '0.5em',
  maxWidth: '20em'
};
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
  background-color: white;
  box-shadow: 0.2em 0.2em 0.6em 0.1em rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em 2em 1em 1em;
  max-width: 76em;
  min-height: 20em;
  min-width: 48em;
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