import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const now = new Date();

  return (
    <Footers>
      <p>Inspirational quotes provided by <Link href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer">ZenQuotes API</Link></p>
      <p>
        © {now.getFullYear()} Naulan
      </p>
      <p>
        <Link href='/'>Terms of Use</Link> | <Link href='/'>Privacy Policy</Link>
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
  @media only Screen and (max-width: 48em) {
    height: auto;
    text-align: center;
  }
  @media only Screen and (max-width: 30em) {
    height: auto;
    text-align: center;
  }
`;

const Link = styled.a`
  color: #aaa;
  font-weight: light;
`;

export default Footer;