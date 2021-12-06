import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Road Radio';
    src: local('Road Radio Bold'), local('Road-Radio-Bold'),
      url('./fonts/RoadRadio-Bold.woff2') format('woff2'),
      url('./fonts/RoadRadio-Bold.woff') format('woff'),
      url('./fonts/RoadRadio-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  body {
    margin: 0;
    height: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: #fefefe;

    * {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 400;
      box-sizing: border-box;
      color: #292929;
    }
  }
  html {
    min-height: 100vh;
    scroll-behavior: smooth;
  }
  #root {
    height: 100%;
    min-height: 100vh;
  }
  #portal {
    position: relative;
  }
  header {
    position: relative;
    z-index: 1;
  }
  section,
  footer {
    position: relative;
  }
  header,
  footer {
    flex: 0 0 auto;
  }
  footer {
    margin-top: auto;
  }
  main {
    flex: 1 0 auto;
  }
  section {
    width: 100%;
  }
  img {
    max-width: 100%;
    height: auto;
    font-size: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
    transition: color, opacity, background-color, border ease 0.25s;
  }
  button {
    border: none;
    background-color: transparent;
    transition: color, opacity, background-color, border-color ease 0.25s;
  }
  a,
  button {
    &:focus {
      outline: none;
    }
    &:focus-visible {
      outline: $primary solid 2px;
    }
    &:active {
      outline: none;
    }
  }
  p,
  figure {
    margin: 0;
  }
  fieldset {
    border: none;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: black !important;
  }
`;

export default {
  colors: {
    white: '#ffffff',
    black: '#292929',
    blue: '#2753f0',
    grey: '#e5e5e5',
    'd-grey': '#959595',
  },
  shadows: {
    base: '0px 4px 4px rgba(0, 0, 0, 0.05)',
  },
  space: [
    '0px',
    '4px',
    '8px',
    '12px',
    '16px',
    '20px',
    '24px',
    '28px',
    '32px',
    '36px',
    '40px',
    '44px',
    '48px',
  ],
  sizes: [
    '0px',
    '4px',
    '8px',
    '12px',
    '16px',
    '20px',
    '24px',
    '28px',
    '32px',
    '36px',
    '40px',
    '44px',
    '48px',
    '52px',
  ],
  fonts: {
    main: 'Roboto, sans-serif',
    secondary: 'Road Radio, sans-serif',
  },
  fontSizes: {
    64: '64px',
    18: '18px',
    16: '16px',
    14: '14px',
    12: '12px',
  },
  lineHeights: {
    160: '160%',
    140: '140%',
    120: '120%',
    100: '100%',
  },
};
