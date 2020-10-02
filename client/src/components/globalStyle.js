import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

  h2 {
    font-family: 'Robertson Alternate';
    src: url('./resources/Robertson-Alternate.ttf') format('truetype');
    font-weight: normal;
    color: red;
    font-size: 60px;
    margin-left: 20px;
    padding-left: 20px;
  }

  h1 {
    font-family: 'Roboto', 'sans-serif';
    font-weight: 500;
    background-color: white;
    font-size: 28px;
    color: #056676;
  }

  body {
    background-image: url("https://i.ibb.co/r5jdb93/dangerzone.png");
    background-position: right;
    background-size: 15%;
    object-fit: cover;
    display: left;
    background-repeat: no-repeat;
    z-index: -1;
    margin: 30 auto;
    background-color: white;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    color: #056676;
  }

  button {
    background-color: white;
    font-family: 'Ubuntu', sans-serif;
    border-color: #056676;
    color: #056676;
    border: 1px solid-#e8ded2;
    text-align: left;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    display: block;
  }

  button:hover {
    color: #e8ded2;
    border: 2px solid #056676;
    background: #056676;
    box-shadow: 0 1px 0 #5eaaa8;
    transition-timing-function: ease-in;
    transition: .3s;
  }
`;

export default GlobalStyle;
