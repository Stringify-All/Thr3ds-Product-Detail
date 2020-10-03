import React from 'react';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import Cart from './Cart';
import Searchbar from './Searchbar';

const SearchbarStyle = styled.div`
  display: flex;
  padding-right: 2em;
`;

const BoxStyle = styled.div`
  position: left;
  display: inline-block;
  padding-left: 20px;
  size: 100%;
`;

const HeaderStyle = styled.section`
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

const CartDisplay = styled.section`
  display: flex;
  align-items: center;
  padding-right: 25px;
  position: right; 
`;

const Header = ({userSessionData, productId, productList}) => (
  <HeaderStyle>
    <Box>
    <BoxStyle>
      <h2>t h r 3 d s</h2>
      <SloganStyle>what's fresher than fresh? hygenic.</SloganStyle>
    </BoxStyle>
    </Box>
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