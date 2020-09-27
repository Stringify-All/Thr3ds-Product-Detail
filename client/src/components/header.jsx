import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Cart from './Cart';

const Header = () => (
    <Jumbotron fluid>
    <Container>
      <h1>Thr3ds</h1>
      <p>
        What's fresher than fresh? Hygenic. 
      </p>
      <Cart />
    </Container>
  </Jumbotron>
);

export default Header; 