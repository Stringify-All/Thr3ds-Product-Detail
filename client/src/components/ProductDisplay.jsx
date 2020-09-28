import React, { useState, useEffect } from 'react';
import getProductStyles from '../API/GetProductStyles';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const CarouselSection = styled.div`
  border: 1px solid black;
  display: flex;
  width: 500;
  height: 600;
`;

const PhotoCarousel = () => {
  const [index, setIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(1);
  const [currentStyle, setCurrentStyle] = useState([]);
  
  useEffect(() => {
    getProductStyles(selectedProduct)
      .then((data) => setCurrentStyle(data.results[0]))
      .catch((err) => console.log(err));
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  console.log('current style photos: ', currentStyle.photos);
  
  const ProductRender = () => {
    if (currentStyle.photos !== undefined) { 
      return (
        currentStyle.photos.map((photo) => (
        <Carousel.Item key={currentStyle.style_id}>
          <img
            width="50%"
            height="auto;"
            class="img-fluid"
            className="d-block w-100"
            src={photo.url}
            alt="Placeholder"
          />
          <Carousel.Caption>
            <h3>placeholder</h3>
          </Carousel.Caption>
        </Carousel.Item>
        )
      )
    )} else {
      return (<div>Loading...</div>);
    };
  }
  
  return (
      <>
        <CarouselSection>
          <Carousel activeIndex={index} onSelect={handleSelect}>
          { ProductRender() }
          </Carousel>
        </CarouselSection>
      </>
    );
};

export default PhotoCarousel;
