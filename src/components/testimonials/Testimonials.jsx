import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review From clients</h5>
      <h2>Testimonial</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide key="1" className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            ksjdflsjldkfsjdf s sjdlf sdf sjdlfjs s dfljslkdf s;ld fsdl
            fjskdjlfkjslkdjflsjldkfjlsk dflkjskl djfksjdl{" "}
          </small>
        </SwiperSlide>
        <SwiperSlide key="2" className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            ksjdflsjldkfsjdf s sjdlf sdf sjdlfjs s dfljslkdf s;ld fsdl
            fjskdjlfkjslkdjflsjldkfjlsk dflkjskl djfksjdl{" "}
          </small>
        </SwiperSlide>
        <SwiperSlide key="3" className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            ksjdflsjldkfsjdf s sjdlf sdf sjdlfjs s dfljslkdf s;ld fsdl
            fjskdjlfkjslkdjflsjldkfjlsk dflkjskl djfksjdl{" "}
          </small>
        </SwiperSlide>
        <SwiperSlide key="4" className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            ksjdflsjldkfsjdf s sjdlf sdf sjdlfjs s dfljslkdf s;ld fsdl
            fjskdjlfkjslkdjflsjldkfjlsk dflkjskl djfksjdl{" "}
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
