import React from 'react';
import GlobalStyle from './globalStyle';
// import styled from 'styled-components';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <GlobalStyle />
        <body>
          <h1> Dangerzone. </h1>
          <p> Long Live the Scrumdog Millionaires </p>
          <button type="submit"> Button Large </button>
        </body>
      </>
    );
  }
}
export default App;
