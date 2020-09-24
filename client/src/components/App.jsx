/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import GlobalStyle from './globalStyle';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <body>
      <GlobalStyle />
      <h1> Dangerzone. </h1>
      <p> Long Live the Scrumdog Billionaires </p>
      <p>The count is {count}</p>
      <button type="submit" className="large-button" onClick={() => setCount(count + 1)}> Button Large </button>
    </body>
  );
};

export default App;
