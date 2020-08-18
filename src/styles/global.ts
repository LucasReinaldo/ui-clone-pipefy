import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /* UI Colors */
    --primary-color: #3d63d3;
    --primary-text-color: #333;
    --color--primary: hsl(var(--primary-hue), 100%, 44%);
    --color--primary--hover: hsl(var(--primary-hue), 100%, 39%);
    --color--primary--active: hsl(var(--primary-hue), 84%, 30%);

    /* ... */

    --border-color: #ebebeb;

    /* Box Shadows */
    --shadow: 0px 2px 4px rgba(37, 37, 37, 0.1);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: #ecf1f8;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Mono', sans-serif;
    color: var(--primary-text-color);
  }

  ul {
    list-style: none;
  }
`;
