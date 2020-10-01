import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const CarouselSection = styled.section`
  display: flex;
  max-width: 500;
  max-height: 600;
  object-fit: cover;
`;

const PhotoCarousel = ({currentStyle}) => {
  const [index, setIndex] = useState(0);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(currentStyle.photos);
  }); 

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <>
        <CarouselSection>
          <Carousel activeIndex={index} onSelect={handleSelect}>
          {photos ? 
            photos.map((photo) => (
              <Carousel.Item key={currentStyle.style_id}>
                  <img
                    class="img-fluid"
                    className="d-block w-100"
                    src={photo.url}
                    alt="Placeholder"
                  />
              </Carousel.Item>
        )) : <div>Loading... </div>}
          </Carousel>
        </CarouselSection>
      </>
    );
};

export default PhotoCarousel;
