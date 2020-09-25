import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import getProducts from '../API/GetProducts';
import Header from './header';
import PhotoCarousel from './product-display';

const App = () => {
  const [count, setCount] = useState(0);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        // console.log('response: ', data);
        setProductList(data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);   

  return (
    <>
      <Header />
      <GlobalStyle />
      <PhotoCarousel />
      <h1> Dangerzone. </h1>
      <p> Long Live the Scrumdog Billionaires </p>
      <p>The count is {count}</p>
      <button type="submit" className="large-button" onClick={() => setCount(count + 1)}>
        Button Large
      </button>
    </>
  );
};

export default App;
