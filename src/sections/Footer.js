import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const now = new Date();

  return (
    <Footers>
      <p>
        © {now.getFullYear()} Naulan
      </p>
      <p>
        <a href='/login'>Terms of Use</a> | <a href='/login'>Privacy Policy</a>
      </p>
    </Footers>
  )
}

const Footers = styled.div`
  align-items: center;
  color: var(--gl2);
  background-color: var(--gd2);
  display: flex;
  flex-direction: column;
  height: 6em;
  justify-content: center;
  padding: 1rem 5rem;
`;

export default Footer;