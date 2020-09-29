import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const StyledCart = styled.section`
  margin-right: 150px;
  align-content: center;
  display: flex;
`;

const Cart = ({userSessionData}) => {
  console.log('cart user data: ', userSessionData);
  const [count, setCount] = useState(0);

  return (
    <>
      <Card />
      <StyledCart>
        <Badge
        badgeContent={ userSessionData.length }
        color="secondary"
        overlap="circle">
          <ShoppingBasketIcon fontSize="large"/>
        </Badge>
      </StyledCart>
    </>
  )
};

export default Cart;