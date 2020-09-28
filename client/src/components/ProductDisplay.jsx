import React, { useState, useEffect } from 'react';
import getProductStyles from '../API/GetProductStyles';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const CarouselSection = styled.section`
  border: 1px solid black;
  display: flex;
  max-width: 500;
  max-height: 600;
`;

const StyledImage = styled(Image)`
  
`;


const PhotoCarousel = () => {
  const [index, setIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(1);
  const [currentStyle, setCurrentStyle] = useState([]);
  
  useEffect(() => {
    getProductStyles(selectedProduct)
      .then((data) => setCurrentStyle(data.results[1]))
      .catch((err) => console.log(err));
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  const ProductRender = () => {
    if (currentStyle.photos !== undefined) { 
      return (
        currentStyle.photos.map((photo) => (
        <Carousel.Item key={currentStyle.style_id}>
            <img
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
