import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import JourneyMap from "../images/Emma_Experience_Map.png";
import TaskFlow from "../images/user_task_flow.png";
import FigJam1 from "../images/Figjam_1.png";
import FigJam2 from "../images/Figjam_2.png";
// Wasn't able to get this working either...

// interface CarouselProps {
//   images: string[];
// }

const MyCarousel = () => {
  const images = [JourneyMap, TaskFlow, FigJam1, FigJam2];

  return (
    <Carousel>
      {images.map((imageUrl, index) => (
        <div key={index} className='flex flex-row justify-center items-center'>
          <img src={imageUrl} className="w-full h-auto object-contain" alt={`Image ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
