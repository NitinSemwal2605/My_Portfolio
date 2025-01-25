// Import React and other necessary modules
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Data } from './Data';
import "./Testimonials.css";

// Testimonials component
const Testimonials = () => {
  return (
    <section className="testimonials container section" id='testimonials'>
      <h2 className='section_title'>Testimonials</h2>
      <span className='section_subtitle'>  </span>

      <Swiper 
        className="testimonials_container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => (
          <SwiperSlide className="testimonials_card" key={id}>
            <img src={image} alt={`Testimonial by ${title}`} className="testimonial_img" />
            <h3 className="testimonial_name">{title}</h3>
            <p className="testimonial_description">{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
