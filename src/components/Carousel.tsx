import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Wasn't able to get this working either...

interface CarouselProps {
  images: string[];
}

const MyCarousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <Carousel>
      {images.map((imageUrl, index) => (
        <div key={index}>
          <img src={imageUrl} className="h-4/5" alt={`Image ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
