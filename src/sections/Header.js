import React from 'react';
import styled from 'styled-components';
import { FaUserAlt } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";

const Header = () => {
  return (
    <Headers>
      <Logos href="/">Naulan</Logos>
      <Navs>
        <Buttons href="/"><FaUserAlt /></Buttons>
        <Buttons href="/"><GrMenu /></Buttons>
      </Navs>
    </Headers>
  )
}

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--bl2);
  color: var(--white);
  position: relative;
  z-index: 500;
  box-shadow: 0.2em 0.2em 0.6em 0.1em rgba(0, 0, 0, 0.2);
  @media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
  }
`;

const Navs = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  `;

const Buttons = styled.a`
  margin-left: 1em;
`;

const Logos = styled.a`
  color: var(--bd3);
  font-weight: 700;
`;

export default Header;