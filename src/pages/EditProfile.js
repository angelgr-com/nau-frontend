import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { MODIFY_CREDENTIALS } from '../store/types';
import CompleteProfile from '../sections/CompleteProfile';

const EditProfile = (props) => {
  let navigate = useNavigate();

  // Hooks
  const [firstNameEdited, setFirstNameEdited] = useState("");
  const [usernameEdited, setUsernameEdited] = useState("");
  const [emailEdited, setEmailEdited] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const firstNameChange = (e) => {
    setFirstNameEdited(e.target.value);
  }
  const usernameChange = (e) => {
    setUsernameEdited(e.target.value);
  }
  const emailChange = (e) => {
    setEmailEdited(e.target.value);
  }

  const sendEditedProfile = async () => {
    setIsLoading(true);
    setIsWrong(false);
    let body = {
      first_name: firstNameEdited,
      username: usernameEdited,
      email: emailEdited,
    };
    const config = {
      headers: { Authorization: `Bearer ${props.credentials.token}` }
    };

    try {
      let res = await axios.put('https://quiet-shelf-00426.herokuapp.com/api/users/profile', body, config);
      if(res) {
        props.dispatch({type: MODIFY_CREDENTIALS, payload: body});
      }
      setIsLoading(false);
      setIsEdited(true);
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
    <>
      <h1>Edit your profile</h1>

      <EditProfileSt>
        <h2>Change your personal data</h2>
        <form id="edit-profile" method="post" autoComplete="off">
          <div>
            <label>First Name: </label>
            <InputSt
              id="first-name"
              name="first-name"
              defaultValue={props.credentials.user.first_name}
              title="first-name"
              type="text"
              onChange={firstNameChange}
              contenteditable
            />
          </div>
          <div>
            <label>Username: </label>
            <InputSt
              id="first-name"
              name="first-name"
              defaultValue={props.credentials.user.username}
              title="first-name"
              type="text"
              onChange={usernameChange}
            />
          </div>
          <div>
            <label>Email: </label>
            <InputSt
              id="email"
              name="email"
              defaultValue={props.credentials.user.email}
              title="email"
              type="text"
              onChange={emailChange}
            />
          </div>
          {isLoading && <Info>Processing your request...</Info>}
          {isEdited && <Info>Edit successful.</Info>}
          {isWrong && <Error>{errorMessage} {isWrong}</Error>}
          <Button onClick={() => sendEditedProfile()}>Save changes</Button>
        </form>
      </EditProfileSt>

      <CompleteProfile headerText='Change your learning profile' />
    </>
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

const EditProfileSt = styled.div`
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
    min-width: 16em;
    max-width: 16em;
    margin-bottom: 4em;
  }
`;

const InputSt = styled.input`
  margin-bottom: 1em;
`;

export default connect((state) => ({
  credentials: state.credentials
}))(EditProfile);