import React from 'react';
import Section from "./Section";

import Slider from 'react-slick';
import { companyLogos } from '../constants'; // Assuming companyLogos is an array of logo URLs
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4, // Show 4 logos at a time
  slidesToScroll: 1,    
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

const Carousel = () => {
  return (
    <Section className='bg-custom'>
      <div className='max-w-[1000px] mx-auto'>
        <h2 className='text-center text-3xl text-black  font-bold mb-6'>Seguros Patrimoniales</h2>
        <Slider {...settings}>
          {companyLogos.map((logo, index) => (
            <div key={index} className=''>
              <img src={logo} alt={`Logo ${index}`} className="w-52 h-52 object-contain" />
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default Carousel;
