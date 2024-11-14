import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Swiperr() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="mb-5">
      <div
        className="col-12 p-md-5 p-3 d-flex flex-wrap "
        style={{ justifyContent: "space-between" }}
      >
        <div className=" col-lg-10 d-flex align-items-center">
          <h6 className="mb-4">FEATURED PROJECTS</h6>
        </div>
        <div className=" col-lg-2 mb-4">
          <Link to={"/projects"} style={{ textDecoration: "none" }}>
            <button
              style={{ padding: "0 30px" }}
              className="btn2 rounded-pill btn-hover button2"
            >
              <span>ALL PROJECTS</span>
              <FontAwesomeIcon
                style={{ transform: "rotate(-45deg)" }}
                className="pt-1"
                fontWeight={"200"}
                icon={faArrowDown}
              />
            </button>
          </Link>
        </div>
      </div>

      <Swiper
        // navigation={{
        //   nextEl: "image-swiper-button-next",
        //   prevEl: ".image-swiper-button-prev",
        //   disabledClass: "swiper-button-disabled",
        // }}
        slidesPerView={1}
        breakpoints={{ 768: { slidesPerView: 2 } }}
        spaceBetween={15}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            backgroundImage: "url('Consultation 2.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "700px",
          }}
        >
          <div className="fil"></div>
          <div className="hf">
            <h1 className="text-white">
              Lorem i
            </h1>
            <p className="btn rounded">Learn More</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ height: "600px", overflow: "hidden" }}>
            <img
              src={"Consultation1.jpg"}
              style={{
                objectFit: "cover",
              }}
              className="swiper-hover"
            />{" "}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ height: "600px", overflow: "hidden" }}>
            <img
              src={"Consultation 2.webp"}
              style={{
                objectFit: "cover",
              }}
              className="swiper-hover"
            />{" "}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ height: "600px", overflow: "hidden" }}>
            <img
              src={"EOR.jpg"}
              style={{
                objectFit: "cover",
              }}
              className="swiper-hover"
            />{" "}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ height: "600px", overflow: "hidden" }}>
            <img
              src={"Production Testing.jpg"}
              style={{
                objectFit: "cover",
              }}
              className="swiper-hover"
            />{" "}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "600px", overflow: "hidden" }}>
            {" "}
            <img
              src={"Software.webp"}
              style={{
                objectFit: "cover",
              }}
              className="swiper-hover"
            />{" "}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ height: "600px", overflow: "hidden" }}>
            <img
              src={"Training.jpg"}
              style={{
                objectFit: "cover",
              }}
              className="swiper-hover"
            />{" "}
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
