import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const CarouselSection = styled.section`
  display: flex;
  max-width: 500;
  max-height: 600;
  object-fit: cover;
`;

const DefaultStyled = styled.section`
  background-image: url(${'https://i.ibb.co/0Y6ypRF/selectstyle.png'});
  height: 600px;
  width: 600px;
  object-fit: cover;
  display: flex;
  background-repeat: no-repeat;
`;

const PhotoCarousel = ({currentStyle, currentProduct}) => {
  const [index, setIndex] = useState(0);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(currentStyle.photos);
  }); 

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  if (currentProduct !== undefined) {
    console.log('selected product: ', currentProduct);
  }
  
  return (
      <>
      {photos ? 
        <CarouselSection>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            { photos.map((photo) => (
              <Carousel.Item key={currentStyle.style_id}>
                  <img
                    class="img-fluid"
                    className="d-block w-100"
                    src={photo.url}
                    alt="Placeholder"
                  />
              </Carousel.Item> 
            ))}
          </Carousel>
        </CarouselSection>
      : <DefaultStyled>
        </DefaultStyled>}
      </>
    );
};

export default PhotoCarousel;
