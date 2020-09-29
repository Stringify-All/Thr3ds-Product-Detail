import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const StyledCart = styled.section`
  margin-right: 150px;
  align-content: center;
  display: flex;
`;

const Cart = () => {
  {/* API Data: user session*/}
  
  return (
    <React.Fragment>
      <Card />
      <StyledCart>
        <ShoppingBasketIcon fontSize="large"/>
      </StyledCart>
    </React.Fragment>
  )
};

export default Cart;