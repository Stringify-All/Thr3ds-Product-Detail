import React from 'react';
import styled from 'styled-components';
import Cart from './Cart';
import Searchbar from './Searchbar';

const SearchbarStyle = styled.div`
  display: inline-block;
  padding-right: 2em;
  position: relative;
  align-items: center;
  height: 100%;
  width: auto;
`;

const BoxStyle = styled.div`
  position: relative;
  display: inline-block;
  padding-left: 20px;
  padding-right: 100px;
  height: auto;
  width: 100%;
`;

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  padding-top: 15px;
  margin-bottom: 50px;
  border-bottom: 1px solid gray;
`;

const SloganStyle = styled.p`
  font-weight: 500;
  font-size: 14px;
`;

const CartDisplay = styled.div`
  display: flex;
  align-items: center;
  padding-right: 25px;
  position: relative;
  height: 100%;
  width: auto;
`;

const Header = ({userSessionData, productId, productList}) => (
  <HeaderStyle>
    <BoxStyle>
      <h2>t h r 3 d s</h2>
      <SloganStyle>what's fresher than fresh? hygenic.</SloganStyle>
    </BoxStyle>
    <div>
      <SearchbarStyle>
          <Searchbar products={productList}/>
      </SearchbarStyle>
    </div>
      <CartDisplay>
        <Cart userSessionData={userSessionData} productId={productId}/>
      </CartDisplay>
  </HeaderStyle>
);

export default Header; 