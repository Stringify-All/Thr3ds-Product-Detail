import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Cart from './Cart';

const LogoStyle = styled.div`
  font-style: bold;
  display: flex;
`;

const HeaderStyle = styled.section`
  display: flex;
  align-items: center;
  padding-top: 15px;
  margin-bottom: 50px;
  border-bottom: 1px solid gray;
`;

const CartDisplay = styled.section`
  display: flex;
  align-items: center;
  padding-right: 25px;
`;

const Header = ({userSessionData}) => (
  <HeaderStyle>
    <Container>
      <h1>Thr3ds</h1>
      <p>What's fresher than fresh? Hygenic.</p>
    </Container>
      <CartDisplay>
        <Cart userSessionData={userSessionData}/>
      </CartDisplay>
  </HeaderStyle>
);

export default Header; 