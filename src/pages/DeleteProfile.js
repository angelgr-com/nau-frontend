import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { LOGOUT } from '../store/types';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import Paragraph from '../components/Paragraph';

const DeleteProfile = (props) => {
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const logOut = async () => {
    const config = {
      headers: { Authorization: `Bearer ${props.credentials.token}` }
    };

    // Update logout status in server
    try {
      await axios.post('https://quiet-shelf-00426.herokuapp.com/api/users/logout', {}, config);
  
      // Delete credentials from redux
      props.dispatch({ type: LOGOUT });
    } catch (error) {
      console.log(error)
    }
  }

  const deleteProfile = async () => {
    setIsLoading(true);
    setIsWrong(false);

    const config = {
      headers: { Authorization: `Bearer ${props.credentials.token}` }
    };

    try {
      let res = await axios.post('https://quiet-shelf-00426.herokuapp.com/api/users/delete', config);

      setIsLoading(false);
      setIsEdited(true);
      setTimeout(()=>{
        logOut();
        navigate('/');
      }, 5000);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.response.data.message);
      setIsWrong(true);
    }
  }


  return (
    <DeleteProfileSt>
      <h1>Delete your profile</h1>
      <Paragraph text="Please, confirm that you wish to delete your profile."/>
      <Paragraph text="You will lose all your progress and your account will be deleted immediately."/>
      <Paragraph text="This action cannot be undone."/>
      {isLoading && <Info>Processing your request...</Info>}
      {isEdited && <Info>Account deleted successfully.</Info>}
      {isWrong && <Error>{errorMessage} {isWrong}</Error>}
      <Button onClick={() => deleteProfile()}>Confirm profile deletion</Button>
    </DeleteProfileSt>
  );
}

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

const DeleteProfileSt = styled.div`
  box-shadow: 0.2em 0.2em 0.6em 0.1em rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em 2em 1em 1em;
  max-width: 40em;
  min-height: 20em;
  min-width: 46em;
  padding: 2em;
  @media only Screen and (max-width: 60em) {
    min-width: 30em;
    max-width: 30em;
    margin-bottom: 40em;
  }
  @media only Screen and (max-width: 48em) {
    min-width: 30em;
    max-width: 30em;
    margin-bottom: 25em;
  }
  @media only Screen and (max-width: 30em) {
    min-width: 16em;
    max-width: 16em;
    margin-bottom: 4em;
  }
`;

export default connect((state) => ({
  credentials: state.credentials
}))(DeleteProfile);