import React, { Component } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './globalStyle.js';


class App extends Component {


  render() {
    return (
      <>
        <GlobalStyle />
        <body>
          <h1> Dangerzone. </h1>
          <p> Long Live the Scrumdog Millionaires </p>
          <button> Button Large </button>
        </body>
      </>
    )
  }
}

export default App;