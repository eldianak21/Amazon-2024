import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselEffect = () => {
  const imgSources = [
    require('./img/first.jpg'),
    require('./img/cover.jpg'),
    require('./img/cover2.jpg'),
    require('./img/cover3.jpg')
  ];

  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {imgSources.map((imageSource, index) => (
          <div key={index}>
            <img src={imageSource} />
          </div>
        ))}
      </Carousel>
      <div className="hero"></div>
    </div>
  )
}

export default CarouselEffect