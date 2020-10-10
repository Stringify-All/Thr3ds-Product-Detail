import React from 'react';
import Cart from './Cart';
import Searchbar from './Searchbar';

const Header = ({userSessionData, productId, productList}) => (
  <div id="header-style-kg">
    <div className="box-style-kg">
      <img className="header-logo-kg" src="https://i.ibb.co/kBm9mpK/thr3dslogo.png" alt="thr3dslogo" border="0"/>
      <div className="slogan-style-kg">
        what's fresher than fresh? hygenic.
      </div>
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