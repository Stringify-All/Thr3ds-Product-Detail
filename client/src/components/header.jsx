import React from 'react';
import styled from 'styled-components';
import Cart from './Cart';
import Searchbar from './Searchbar';

const Header = ({userSessionData, productId, productList}) => (
  <div id="header-style-kg">
    <div className="box-style-kg">
      <h2>t h r 3 d s</h2>
      <p className="slogan-style-kg">what's fresher than fresh? hygenic.</p>
    </div>
    <div>
      <div id="searchbar-kg">
          <Searchbar products={productList}/>
      </div>
    </div>
      <div id="cart-display-kg">
        <Cart userSessionData={userSessionData} productId={productId}/>
      </div>
  </div>
);

export default Header; 