import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Body.css";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swiperr from "../Swiper/Swiper";
import { useEffect, useRef } from "react";

export default function Body() {
  const ref = useRef(null);
  const secondRef = useRef(null);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     secondRef.current.scrollIntoView();
  //   });
  // }, []);

  useEffect(() => {
    ref.current.play();
  }, []);
  return (
    <>
      <div className="imggdiv">
        <video
          ref={ref}
          className="bg mt-5"
          loop
          muted
          style={{ width: "100%", height: "100%" }}
        >
          <source src="video.mp4" type="video/mp4" />
        </video>

        <div className="title-div h-100 ps-md-5 p-3">
          <div className="">
            <h1 className="title fw-bold d-block ani">WE CREATE THE</h1>
            <h1
              className="title ani1 mt-4"
              style={{
                color: "#f13930",
              }}
            >
              STREAM
            </h1>
          </div>

          <div></div>
        </div>
      </div>

      <div ref={secondRef} className="d-flex flex-wrap ">
        <div className=" col-lg-4 col-12 border">
          <div className="p-md-5 p-4">
            <h6 className="mb-4">OUR SERVICES</h6>
            <h2 className="mb-5">
              We Offer a Range of Services to Meet All Types of Needs
            </h2>

            <Link to={"/services"} style={{ textDecoration: "none" }}>
              <button
                style={{ padding: "0 30px" }}
                className="btn2 rounded-pill button2 arrow"
              >
                <span>ALL SERVICES</span>
                <FontAwesomeIcon
                  style={{ transform: "rotate(-45deg)" }}
                  className="pt-1 "
                  fontWeight={"200"}
                  icon={faArrowDown}
                />
              </button>
            </Link>
          </div>
        </div>

        <div className=" col-lg-4 col-md-6 col-12 border">
          <div className=" border-bottom ">
            <div className="p-md-5 p-4 col-12 h50">
              <img
                className="mb-2"
                style={{ width: "12%" }}
                src={"./Training.png"}
              />
              <h5 className="mb-4">Training</h5>
              <p>
                Our industry-leading, competency-based training is now available
                both online and in the classroom. Drawing on extensive global
                experience, we offer comprehensive and unique courses designed
                to elevate your qualifications and expertise.
              </p>
            </div>
          </div>

          <div className="p-md-5 p-4 col-12  h50">
            <img
              className="mb-2"
              style={{ width: "12%" }}
              src={"./Software.png"}
            />
            <h5 className="mb-4">Software</h5>
            <p>
              Our company specializes in providing cutting-edge software
              solutions tailored to meet the diverse needs of our clients. From
              specialized single-task tools to comprehensive software suites for
              complex project management, we offer a wide range of software
              services to support geoscience, engineering, and other industries.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 border ">
          <div className=" border-bottom">
            <div className="p-md-5 p-4 col-12">
              <img
                className="mb-2"
                style={{ width: "12%" }}
                src={"Consultaion.jpg"}
              />
              <h5 className="mb-4">Consultation</h5>
              <p className=" py-2 con">
                We provide tailored solutions to help clients overcome complex
                subsurface challenges, improve asset value, and ensure
                sustainable reservoir management.
              </p>
            </div>
          </div>

          <div className="p-md-5 p-4 col-12">
            <img
              className="mb-2"
              style={{ width: "12%" }}
              src={"./Opertation.png"}
            />
            <h5 className="mb-4">Operations</h5>
            <p>
              Streamlines provides extensive production services aimed at
              delivering precise data to enhance well
              productivity and efficiency.
            </p>
          </div>
        </div>
      </div>

      <Swiperr />

      <div className="d-flex flex-wrap p-md-3 center">
        <div className="col-md-4 col-12 mt-5 py-5 p-3 res">
          <div className=" mt-3 ">
            <div>
              <h2 className="mb-5">STORIES</h2>
            </div>

            <div className="mb-4">
              <h6>Project Spotlight:</h6>
              <p>Offshore Shukeir Oil CO. (OSOCO), Egypt </p>
            </div>

            <div className="mb-4">
              <h6>Year Completed:</h6>
              <p>2023</p>
            </div>

            <div>
              <h6>Title:</h6>
              <p>
                Production Optimization, reservoir Modelling, and Gas Lift
                Design
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-8 col-12 d-flex align-items-center justify-content-center py-5 border p-3 mt-3">
          <p style={{ fontSize: "20px" }}>
            Streamlines adeptness in reservoir modelling, data integration, and
            field development strategies significantly shaped OSOCO's vision for
            Optimized reservoir Performance. The team's professionalism,
            innovative techniques, and comprehensive report exceeded
            expectations, influencing the design of an efficient gas lift system
            for East Zeit Field.
            <p className="fw-bold mt-3">
              Eng. Tarek Abdel Raouf <br />
              Operations General Manager
            </p>
          </p>
        </div>
      </div>

      <div className="d-flex flex-wrap mb-5">
        <div className=" col-lg-6 col-12 border ">
          <div className="p-md-5 p-4">
            <h6 className="mb-5">ABOUT OUR COMPANY</h6>
            <h3 className="mb-5">
              We provide professional solutions <br /> to deliver safe &
              efficient projects
            </h3>
            <p className="mb-5">
              we strive to advance the oil and gas industry through innovative
              services, expert insights, and leading-edge technology.
            </p>

            <Link to={"/aboutus"} style={{ textDecoration: "none" }}>
              <button
                style={{ padding: "0 30px" }}
                className="btn2 rounded-pill btn-hover py-3 d-flex align-items-center gap-2 text-uppercase"
              >
                <span>READ MORE</span>
                <FontAwesomeIcon
                  style={{ transform: "rotate(-45deg)" }}
                  className="pt-1"
                  fontWeight={"200"}
                  icon={faArrowDown}
                />
              </button>
            </Link>
          </div>
          <div className="border d-flex flex-wrap col-md-12 mt-5 ">
            <div className="col-md-4 col-12  border-end border-bottom p-4 p-md-2 startt ">
              <div className="">
                <h1 className=" display-3 fw-bold">+300</h1>
                <p className="center">Delivered courses</p>
              </div>
            </div>
            <div className="col-md-4 col-12  border-end border-bottom  p-4 p-md-2 startt">
              <div>
                <h1 className=" display-3 fw-bold">+50</h1>
                <p className="center">Clients</p>
              </div>
            </div>{" "}
            <div className="col-md-4 col-12  border-bottom p-md-3  p-4 p-md-2 startt">
              <div>
                <h1 className=" display-3 fw-bold">5</h1>
                <p className="center">Studies</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center border">
          <img className="img1" src={"ph.jpg"} />
        </div>
      </div>
    </>
  );
}
