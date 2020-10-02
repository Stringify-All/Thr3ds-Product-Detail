import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Cart from './Cart';

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
`;

const Header = ({userSessionData}) => (
  <HeaderStyle>
    <Container>
      <h2>t h r 3 d s</h2>
      <SloganStyle>what's fresher than fresh? hygenic.</SloganStyle>
    </Container>
      <CartDisplay>
        <Cart userSessionData={userSessionData}/>
      </CartDisplay>
  </HeaderStyle>
);

export default Header; 