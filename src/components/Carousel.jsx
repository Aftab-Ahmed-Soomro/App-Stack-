import React from 'react'
import CarouselComponent from '../common/CarouselComponent'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Carousel = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
    <div className='px-4 sm:px-6 md:px-10 lg:px-20' data-aos="fade-down" data-aos-delay="100">
      <h1 className='text-3xl font-semibold text-center'>Our Projects Set the Bar for<span className='text-[#0071A0]'>  App Innovation</span></h1>
      <p className='text-sm leading-6 mt-6 text-gray-500 mb-12 text-center mx-auto'>From disruptive startups to global brands, we’ve built apps that don’t just win awards—they win users. Dive into our portfolio and see
      why we’re the go-to choice for companies aiming to dominate their industry.</p>
    </div>
    <CarouselComponent />
    </>
  )
}

export default Carousel
