import React, { useState, useEffect } from 'react';
import GlobalStyle from './globalStyle';
import getProducts from '../API/GetProducts';
import Header from './header';
import PhotoCarousel from './product-display';
import ProductDescription from './main-description';
import RelatedStyles from './style-selector';

const App = () => {
  const [count, setCount] = useState(0);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProductList(data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);     

  return (
    <>
    <GlobalStyle />
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <PhotoCarousel products={productList}/>
          </div>
          <div class="col-sm-4">
            <ProductDescription products={productList}/>
            <RelatedStyles /> 
          </div>
          
        <div class="row">  
          <div class="col-sm-8">
            <h1> Dangerzone. </h1>
            <p> Long Live the Scrumdog Billionaires </p>
            <p>The count is {count}</p>
            <button type="submit" className="large-button" onClick={() => setCount(count + 1)}>
              Button Large
            </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
