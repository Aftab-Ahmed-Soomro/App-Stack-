import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import CarouselCard from './CarouselCard';

const CarouselComponent = () => {
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);

  // Handlers for mouse/touch events
  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  // For touch devices
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);

  const onChange = currentSlide => {
    console.log(currentSlide);
  };

  return (
    <div
      ref={dragRef}
      style={{ cursor: isDragging ? 'grabbing' : 'auto' }}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Carousel
        afterChange={onChange}
        draggable={true}
        swipeToSlide={true}
        autoplay={true}
        autoplaySpeed={3000}
      >
        <CarouselCard heading={"Maids on Fly"} paragraph={"Partnering with us, Maids on Fly is transforming the domestic services landscape with an innovative mobile app. The app streamlines the process of booking and managing domestic help. This makes the service more efficient, user-friendly, and accessible to users."} img={"/imgs/carousel1.png"} bgColor={"#080E76"} />
        <CarouselCard heading={"Kitty App"} paragraph={"Kitty App partnered with us to bring a seamless trading experience to users. The platform boasts a sleek design inspired by a car dashboard, allowing traders to manage their activities effortlessly and effectively through this innovative app."} img={"/imgs/carousel2.png"} bgColor={"#000000"} />
        <CarouselCard heading={"Help"} paragraph={"With the help of a Fully automated home services system provided by Trango Tech, Helpp was able to book 23000+ orders and fulfilled them successfully till now from zero and continuing to increase."} img={"/imgs/carousel3.png"} bgColor={"#0071A0"} />
      </Carousel>
    </div>
  );
};
export default CarouselComponent;