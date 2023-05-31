import React from 'react';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import client1 from '../../assets/sumair.jpeg';
import client2 from '../../assets/david.jpeg';
import client3 from '../../assets/gaby.jpeg';
import './recomendations.css';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    avatar: client1,
    link_user: 'https://www.linkedin.com/in/sumairq/',
    name: 'Sumair Qaisar',
    review:
      'I have worked alongside Rizo while building multiple group projects. During our time together I have seen him, not only excel at the core programming skills but also other important soft skills like communication, problem-solving, brainstorming. His contributions have been critical to the successful completion of the projects. His incredible attention to detail and ambition set a great example for other team members as well. I look forward to working with Rizo who, besides his professional competencies, is also a very friendly and affable person. I have only optimistic predictions for his career trajectory.',
  },

  {
    id: 2,
    avatar: client2,
    link_user: 'https://www.linkedin.com/in/david-lafontant/',
    name: 'David Lafontant',
    review:
      'I had, and fortunately still have, the pleasure of being a teammate of Muhammad Rizo Abdunazarov on several projects. In addition to his proven skills in technologies such as JavaScript, React, and Ruby on Rails, he is someone who always helps the team focus. He leads by example. He is a problem solver and a hardworking person.',
  },

  {
    id: 3,
    avatar: client3,
    link_user: 'https://www.linkedin.com/in/gabyse/',
    name: 'Gabriela Sánchez Espirilla',
    review:
      'Muhammad is a talented programmer and proficient in working with technologies. We pair-programmed together as students at Microverse, where he proved his commitment to getting high-quality projects. I also realize that he has de ability to devise not just one but several ways to go about implementing algorithms and applications. This, along with his innate positive attitude, got us through the coding difficulties we faced, so I can assure you that he is an excellent coding partner and also a great friend who loves mentoring others. I am sure he will be successful in his efforts and will be an asset to whatever web development team is lucky to include him.',
  },
];

const Recomendations = () => (
  <section id="recomendations">
    <h5>Recomendations From Other Developers</h5>
    <h2>Recomendations</h2>
    <Swiper
      className="container testimonials__container"
      modules={[Pagination, Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {testimonials.map((reviewer) => (
        <SwiperSlide className="testimonial" key={reviewer.id}>
          <a href={reviewer.link_user}>
            <div className="client__avatar">
              <img src={reviewer.avatar} alt="client profile" />
            </div>
            <h5 className="client__name">{reviewer.name}</h5>
            <small className="client__review">{reviewer.review}</small>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Recomendations;
