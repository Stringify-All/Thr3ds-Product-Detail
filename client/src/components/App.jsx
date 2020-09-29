import React, { useState, useEffect } from 'react';
import GlobalStyle from './globalStyle';
import getProducts from '../API/GetProducts';
import getProductInfo from '../API/GetProductInfo';
import getProductStyles from '../API/GetProductStyles';
import AddItem from './AddToCart';
import Header from './Header';
import PhotoCarousel from './ProductDisplay';
import ProductDescription from './MainDescription';
import SloganDescription from './SecondaryDescription';
import RelatedStyles from './StyleSelector';

const App = () => {

  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(1);
  const [currentStyle, setCurrentStyle] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(1);

  useEffect(() => {
    getProducts()
      .then((data) => setProductList(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getProductInfo(selectedProduct)
      .then((data) => setSelectedProduct(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getProductStyles(selectedProduct)
      .then((data) => setCurrentStyle(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <GlobalStyle />
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <PhotoCarousel currentStyle={currentStyle.results} />
          </div>

          <div class="col-sm-4">
            <ProductDescription selected={selectedProduct} />
            <RelatedStyles styles={currentStyle} selected={selectedStyle}/> 
            <AddItem />
          </div>
        </div>
        <SloganDescription selected={selectedProduct} />
    </div>
    </>
  );
};

export default App;
