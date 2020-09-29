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
import getCart from '../API/GetCart';

const App = () => {

  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(1);
  const [currentStyle, setCurrentStyle] = useState([]);
  const [relatedStyles, setRelatedStyles] = useState([]);
  const [userId, setUserId] = useState(1234);
  const [userSessionData, setUserSessionData] = useState([]);
  const [cartData, setCartData] = useState([]);

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
      .then((data) => setCurrentStyle(data.results[0]))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getProductStyles(selectedProduct)
      .then((data) => setRelatedStyles(data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getCart(userId)
      .then((data) => setUserSessionData(data))
      .catch((err) => console.log(err));
  }, []);

  console.log('user session data: ', userSessionData);

  return (
    <>
    <GlobalStyle />
      <Header userSessionData={userSessionData}/>
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <PhotoCarousel currentStyle={currentStyle} />
          </div>

          <div class="col-sm-4">
            <ProductDescription selected={selectedProduct} />
            <RelatedStyles
            selectedStyleHandler={setCurrentStyle}
            selected={currentStyle}
            relatedStyles={relatedStyles}/>
            <AddItem cartData={currentStyle}/>
          </div>
        </div>
        <SloganDescription selected={selectedProduct} />
    </div>
    </>
  );
};

export default App;
