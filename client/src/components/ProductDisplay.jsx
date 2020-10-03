import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import Zoom from 'react-medium-image-zoom';

const CarouselSection = styled.section`
  display: flex;
  width: 600;
  height: 600;
  object-fit: cover;
`;

const CarouselImageStyle = styled.div`
  object-fit: cover;
  display: block;
`;

const DefaultStyled = styled.section`
  background-image: url(${'https://i.ibb.co/0Y6ypRF/selectstyle.png'});
  height: 600px;
  width: 600px;
  object-fit: cover;
  display: flex;
  background-repeat: no-repeat;
  background-size: 100%;
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
  
  return (
      <>
      <CarouselSection>
        {photos ? 
          <Carousel activeIndex={index} onSelect={handleSelect}>
            { photos.map((photo) => (
              <Carousel.Item key={currentStyle.style_id}>
              <CarouselImageStyle>
                  <img
                    class="img-fluid"
                    className="d-block w-100"
                    src={photo.url}
                    alt="Placeholder"
                    onClick={() => setIsZoomed(true)}
                  />
              </CarouselImageStyle>
              </Carousel.Item> 
            ))}
          </Carousel>
        : <DefaultStyled>
          </DefaultStyled>}
        </CarouselSection>
      </>
    );
};

export default PhotoCarousel;
