import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const now = new Date();

  return (
    <Footers>© {now.getFullYear()} Naulan</Footers>
  )
}

const Footers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--gd2);
  color: var(--gl2);
  height: 6em;
`;

export default Footer;