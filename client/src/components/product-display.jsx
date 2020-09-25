import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const CarouselSection = styled.div`
  background: black;
  border-radius: 3px;
  margin: 0.5em 1em;
  padding-left: 0.25em;
  size: 50%;
`

const PhotoCarousel = ({products}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  const ProductRender = products.map((product) => {
    return (
      <Carousel.Item key={product.id}>
        <img
          className="d-block w-100"
          src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png"
          alt="Placeholder"
        />
        <Carousel.Caption>
          <h3>{product.name}</h3>
          <p>{product.slogan}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <>
      <CarouselSection />
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {ProductRender}
        </Carousel>
    </>
  );
}

export default PhotoCarousel;
