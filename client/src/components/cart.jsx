import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const StyledCart = styled.section`
  margin-right: 150px;
  align-content: center;
  display: flex;
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