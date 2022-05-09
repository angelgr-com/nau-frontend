import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /*
  blue - https://coolors.co/palette/203d54-1a4971-2368a2-3183c8-63a2d8-aad4f5-eff8ff
  gray - https://coolors.co/palette/7c7f91-e4e5e9-cacbd3-b0b2bd-5c5e6d-3d3f49
  */
  :root{
    --bd3:#203d54;
    --bd2:#1a4971;
    --bd1:#2368a2;
    --b: #3183c8;
    --bl1:#63a2d8;
    --bl2:#aad4f5;
    --bl3:#eff8ff;
    --gd2:#3d3f49;
    --gd1:#5c5e6d;
    --g:#b0b2bd;
    --gl1:#cacbd3;
    --gl2:#e4e5e9;
  }
  *, *::before, *::after{
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }
  *:focus {
    outline: none;
  }
  html{
    scroll-behavior: smooth;
  }
  body,
  html,
  a {
    font-family: 'Poppins', sans-serif;
  }
  a {
    outline: none;
    text-decoration: none;
  }
  body {
    background: var(--background);
    border: 0;
    margin: 0;
    min-width: 12em;
    outline: 0;
    overflow-x: hidden;
    padding: 0;
  }
  button {
    border: none;
    outline: none;
    &:focus {
      outline: none;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
  img, svg {
    height: auto;
    width: 100%;
  }
`;
