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
        className="col-12 p-3 d-flex flex-wrap "
        style={{ justifyContent: "space-between" }}
      >
        <div className="  d-flex align-items-center">
          <h2 className="mb-4">FEATURED PROJECTS</h2>
        </div>
        <div className="  mb-4">
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
        spaceBetween={25}
        centeredSlides={true}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Autoplay,Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            backgroundImage: "url('Artificial Lift.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "600px",
          }}
        >
          <div className="fil"></div>
          <div className="hf">
            <div className="center" style={{  flexDirection: 'column'}}>
              <h5 style={{color: 'white' , marginBottom: '15px'}}> Artificial Lift:</h5>
              <p className="text-white " style={{ width: "80%"  , textAlign: 'start' }}>
                 Streamlines offers innovative artificial lift
                solutions tailored for the oil and gas industry, enhancing
                production efficiency and maximizing reservoir performance. Our
                advanced technologies, including gas lift systems, are designed
                to optimize well output while minimizing operational costs.
              </p>
            </div>
            <Link to={"/artificalleft"}>
              <button className="btn btn-danger">Learn more</button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url('Consultation1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "600px",
          }}
        >
          <div className="fil"></div>
          <div className="hf">
          <div className="center" style={{  flexDirection: 'column'}}>
            <h5 style={{color: 'white' , marginBottom: '15px' }}> Consultation:  </h5>

            <p className="text-white " style={{ width: "80%" , textAlign: 'start' }}>
              consultation:
                Streamlines is offering a variety of Geological, Geophysical, Reservoir Engineering, and Operations
                Studies. The studies include the various stages from data collection, validation, marching, reservoir
                history balance, sedimentary modeling, fault seal analysis, structural and tectonic interpretation of
                2D/3D seismic data, 3D geological modeling, AVO and stochastic seismic Inversion, play and prospect
                risk analysis, reservoir engineering, FDP & FFR studies, and development plan.
              </p>
            </div>
            <Link to={"/contactus"}>
              <button className="btn btn-danger">Learn more</button>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: "url('EOR.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "600px",
          }}
        >
          <div className="fil"></div>
          <div className="hf">
            <div className="center" style={{  flexDirection: 'column'}}>
              <h5 style={{color: 'white' , marginBottom: '15px'}}> Enhanced Oil Recovery (EOR):</h5>
              <p className="text-white " style={{ width: "80%"  , textAlign: 'start' }}>
                Streamlines ensures reliable supply chains and provides top-quality chemicals for Enhanced Oil
                Recovery (EOR), covering the full process from sourcing to field applications and enabling customized
                EOR strategies that meet specific reservoir requirements.
              </p>
            </div>
            <Link to={"/enhancing"}>
              <button className="btn btn-danger">Learn more</button>
            </Link>
          </div>
        </SwiperSlide>
        
        <SwiperSlide
          style={{
            backgroundImage: "url('Production Testing.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "600px",
          }}
        >
          <div className="fil"></div>
          <div className="hf">
            <div className="center" style={{  flexDirection: 'column'}}>
              <h5 style={{color: 'white' , marginBottom: '15px'}}> Testing:</h5>
              <p className="text-white " style={{ width: "80%"  , textAlign: 'start' }}>
                Streamlines provides extensive production well testing services aimed at delivering precise data to
                enhance well productivity and efficiency. We perform thorough assessments of pressure, temperature,
                and flow to ensure optimal well performance and reliability. </p>
              </div>
            <Link to={"/testing"}>
              <button className="btn btn-danger">Learn more</button>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: "url('Training.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "600px",
          }}
        >
          <div className="fil"></div>
          <div className="hf">
            <div className="center" style={{  flexDirection: 'column'}}>
              <h5 style={{color: 'white' , marginBottom: '15px'}}>Traning:</h5>
              <p className="text-white " style={{ width: "80%"  , textAlign: 'start' }}>
                At Streamlines, we deliver expert training services designed to advance skills and knowledge across a
                wide range of industries. Our courses encompass all upstream and downstream disciplines, IT, machine
                learning, digital transformation, finance, economics, and more. Our training programs are tailored to
                meet the unique needs of each client, empowering professionals to excel and drive success in their
                fields.
              </p>
            </div>
            <Link to={"/courses"}>
              <button className="btn btn-danger">Learn more</button>
            </Link>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide
          style={{
            backgroundImage: "url('Software.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "600px",
          }}
        >
          <div className="fil"></div>
          <div className="hf">
            <div className="center" style={{  flexDirection: 'column'}}>
              <h5 style={{color: 'white' , marginBottom: '15px'}}> Software:</h5>
              <p className="text-white " style={{ width: "80%"  , textAlign: 'start' }}>
                Our company specializes in providing cutting-edge software solutions tailored to meet the diverse
                needs of our clients. From specialized single-task tools to comprehensive software suites for complex
                project management, we offer a wide range of software services to support geoscience, engineering,
                and other industries.
              </p>
            </div>
            <Link to={"/software"}>
              <button className="btn btn-danger">Learn more</button>
            </Link>
          </div>
        </SwiperSlide> */}

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
