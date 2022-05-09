import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const now = new Date();

  return (
    <Footers>© {now.getFullYear()} Naulan</Footers>
  )
}

const Footers = styled.div`
  align-items: center;
  color: var(--gl2);
  background-color: var(--gd2);
  display: flex;
  height: 6em;
  justify-content: center;
  padding: 1rem 5rem;
`;

export default Footer;