import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const StyledCart = styled.div`
  align-content: right;
  display: flex;
  position: relative;
  float: right;
  margin: 0 1.5%;
  width: 30%;
  text-align: right;
`;

const Cart = ({userSessionData}) => {

  return (
    <>
      <Card />
      <StyledCart>
        <Badge key={userSessionData.user_session}
        badgeContent={userSessionData.length}
        color="secondary"
        overlap="circle">
          <ShoppingBasketIcon fontSize="large" key={userSessionData.user_session}/>
        </Badge>
      </StyledCart>
    </>
  )
};

export default Cart;