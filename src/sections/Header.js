import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../store/types';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import { GrMenu } from 'react-icons/gr';

const Header = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    // console.log('Redux credentials: ', props.credentials);
  });

  const logOut = async () => {
    const config = {
      headers: { Authorization: `Bearer ${props.credentials.token}` }
    };

    console.log('config', config);

    // Update logout status in server
    try {
      await axios.post('http://localhost:8000/api/users/logout', {}, config);
  
      // Delete credentials from redux
      props.dispatch({ type: LOGOUT });
      navigate("/");
    } catch (error) {
      console.log(error)
    }
  }

  // Render without credentials
  if (!props.credentials?.token) {
    return (
      <Headers>
        <Container>
          <Logos href="/">Naulan</Logos>
          <Navs>
            <a href="/register">Register</a>
            <Buttons href="/login"><FaUserAlt /></Buttons>
            <Buttons href="/"><GrMenu /></Buttons>
          </Navs>
        </Container>
      </Headers>
    )
  // Render with credentials 
  } else {
    return (
      <Headers>
        <Container>
          <Logos href="/">Naulan</Logos>
          <Navs>
            <button onClick={() => logOut()}>Logout</button>
            <Buttons href="/profile"><FaUserAlt /></Buttons>
            <Buttons href="/"><GrMenu /></Buttons>
          </Navs>
        </Container>
      </Headers>
    )
  }
}

const Headers = styled.header`
  align-items: center;
  box-shadow: 0.2em 0.2em 0.6em 0.1em rgba(0, 0, 0, 0.2);
  background-color: var(--bl2);
  color: var(--white);
  display: flex;
  justify-content: center;
  opacity: 0.9;
  padding: 1rem 3rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  @media only Screen and (max-width: 48em) {
    padding: 1rem 2rem;
  }
  @media only Screen and (max-width: 30em) {
    padding: 0.5rem 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  max-width: 76em;
`;

const Navs = styled.nav`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  `;

const Buttons = styled.a`
  margin-left: 1em;
`;

const Logos = styled.a`
  color: var(--bd3);
  font-weight: 700;
`;

export default connect((state) => ({
  credentials: state.credentials
}))(Header);