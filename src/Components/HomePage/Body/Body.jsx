import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Body.css";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swiperr from "../Swiper/Swiper";
import { useEffect, useRef } from "react";
import AnimatedCounter from "./Animate";

export default function Body() {
  const ref = useRef(null);
  const sfref = useRef(null);
  const secondRef = useRef(null);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     secondRef.current.scrollIntoView();
  //   });
  // }, []);

  useEffect(() => {
    ref.current.play();
  }, []);

  // console.log(sfref.current.offsetTop);

  return (
    <>
      <div className="imggdiv">
        <div className="position-relative overflow-hidden">
          <div
            className="position-absolute top-0 start-0 bg-black w-100 "
            style={{ zIndex: "5", opacity: "0.3", height: "99%" }}
          ></div>
          <video
            ref={ref}
            className="bg mt-5"
            loop
            muted
            style={{ width: "100%", height: "100%" }}
          >
            <source src="video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="title-div ps-md-5 p-3" style={{ zIndex: "6" }}>
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
        <div
          className=" col-lg-4 col-12 border roww"
          style={{
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="p-md-5 p-4">
            <h2 className="mb-4">OUR SERVICES</h2>

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
            <div className="p-md-4 p-3 col-12 h50 d-flex gap-4 center">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: "280px",
                }}
              >
                <img
                  className=" mb-2"
                  style={{ width: "50px", height: "20%" }}
                  src={"./Training.png"}
                />
                <h6 className="">Training</h6>
              </div>
              <div>
                <p>
                  Our industry-leading, competency-based training is now
                  available both online and in the classroom. Drawing on
                  extensive global experience, we offer comprehensive and unique
                  courses designed to elevate your qualifications and expertise.
                </p>
              </div>
            </div>
          </div>

          <div className="p-md-4 p-3 col-12 h50 d-flex gap-4 center">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "280px",
              }}
            >
              <img
                className=" mb-2"
                style={{ width: "50px", height: "20%" }}
                src={"./Software.png"}
              />
              <h6 className="">Software</h6>
            </div>
            <div>
              <p>
                Our company specializes in providing cutting-edge software
                solutions tailored to meet the diverse needs of our clients.
                From specialized single-task tools to comprehensive software
                suites for complex project management, we offer a wide range of
                software services to support geoscience, engineering, and
                other industries.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 border ">
          <div className=" border-bottom">
            {/* 
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
          </div> */}

            <div className=" border-bottom ">
              <div className="p-md-4 p-3 col-12 d-flex gap-4 center">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: "280px",
                  }}
                >
                  <img
                    className=" mb-2"
                    style={{ width: "50px", height: "20%" }}
                    src={"Consultaion.jpg"}
                  />
                  <h6 className="">Consultation</h6>
                </div>
                <div>
                  <p>
                    We provide tailored solutions to help clients overcome
                    complex subsurface challenges, improve asset value, and
                    ensure sustainable reservoir management.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-md-4 p-3 col-12 h50 d-flex gap-4 center">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "280px",
              }}
            >
              <img
                className=" mb-2"
                style={{ width: "50px", height: "20%" }}
                src={"./Opertation.png"}
              />
              <h6 className="">Operations</h6>
            </div>
            <div>
              <p>
                Streamlines provides extensive production services aimed at
                delivering precise data to enhance well
                productivity and efficiency.
              </p>
            </div>
          </div>
          {/* <div className="p-md-5 p-4 col-12">
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
          </div> */}
        </div>
      </div>

      <Swiperr />

      <div
        className="d-flex flex-wrap p-3 center"
        style={{ marginTop: "-70px" }}
      >
        {/* <div className="col-md-4 col-12 mt-5 py-5 p-3 res">
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
        </div> */}

        <div
          className=" col-12 py-5 p-3 mt-5"
          style={{ backgroundColor: "#EAEAEA", borderRadius: "15px" }}
        >
          <div>
            <h2 className="mb-4">TESTIMONY</h2>
          </div>

          <p style={{ fontSize: "20px" }} className="mb-4">
            Streamlines adeptness in reservoir modelling, data integration, and
            field development strategies significantly shaped OSOCO's vision for
            Optimized reservoir Performance. The team's professionalism,
            innovative techniques, and comprehensive report exceeded
            expectations, influencing the design of an efficient gas lift system
            for East Zeit Field.
          </p>

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
            <p className="mb-5">
              Production Optimization, reservoir Modelling, and Gas Lift Design
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "-50px",
            }}
          >
            {/* <p className="fw-bold mt-5" style={{fontSize:'22px'}}>
                Eng. Tarek Abdel Raouf <br />
                Operations General Manager
              </p> */}
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap">
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
          <div ref={sfref} className="border d-flex flex-wrap col-md-12 mt-5 ">
            <div className="col-md-4 col-12  border-end border-bottom p-4 p-md-2 startt ">
              <div className="">
                <h1 className=" display-3 fw-bold">
                  +<AnimatedCounter from={0} to={300} />{" "}
                </h1>
                <p className="center">Delivered courses</p>
              </div>
            </div>
            <div className="col-md-4 col-12  border-end border-bottom  p-4 p-md-2 startt">
              <div>
                <h1 className=" display-3 fw-bold">
                  +<AnimatedCounter from={0} to={50} />
                </h1>
                <p className="center">Clients</p>
              </div>
            </div>{" "}
            <div className="col-md-4 col-12  border-bottom p-md-3  p-4 p-md-2 startt">
              <div>
                <h1 className=" display-3 fw-bold">
                  <AnimatedCounter from={0} to={5} />
                </h1>
                <p className="center">Studies</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center border">
          <img className="img1" src={"ph.jpg"} />
        </div>

        <div
          className="col-12"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <div className="col-12 py-5 p-3" style={{ marginBottom: "-80px" }}>
            <h2 className="mb-4">OUR CLIENTS</h2>
          </div>

          <div
            className="position-relative w-100 "
            style={{ height: "200px", overflowX: "hidden" }}
          >
            <div
              className="position-absolute top-50 "
              style={{ overflowX: "hidden", transform: "translateY(-50%)" }}
            >
              <div className="ticker-wrap">
                <div className="p-3 sc-1">
                  <div className="sc-1-track">
                    <div className="d-flex">
                      <img
                        className=""
                        style={{ height: "100px", width: "150px" }}
                        src={"1-Logo.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"3-2.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"4F397657-CE5B-426D-8BB5-04FBBC3E2469.jpg"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "200px" }}
                        src={"5e709a571b62e.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"62cc3c128506279.Y3JvcCw1NjY5LDQ0MzQsMCw2MTc.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"1024x1024bb.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"16934754508.jpg"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"1631353406420.jpg"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "150px" }}
                        src={"1637153398716.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={
                          "agiba-petroleum-company-logo-1D991D1519-seeklogo.com.png"
                        }
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"Arda_Member_Logos_EGPC.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"Arda_Sponsor_Logos_Gold_Adnoc.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"aunnamed (1).png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"EGAS-e1560080422598-1-750x411.jpg"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"images (1).jpg"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"Logo-1.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"OC_02.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "150px" }}
                        src={"osoco-logo.jpg"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"suco-logo.webp"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "150px" }}
                        src={"unnamed.jpg"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "150px" }}
                        src={"unnamed.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"scimitar_production_egypt_ltd_spel_logo (11).png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"images.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"16934760724.jpg"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="position-absolute top-50 "
              style={{
                overflow: "hidden",
                transform: "translateY(-50%)",
                overflowX: "hidden",
              }}
            >
              <div className="ticker-wrap">
                <div className="p-2 sc-2">
                  <div className="sc-2-track">
                    <div className="d-flex">
                      <img
                        className=""
                        style={{ height: "100px", width: "150px" }}
                        src={"1-Logo.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"3-2.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"4F397657-CE5B-426D-8BB5-04FBBC3E2469.jpg"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "200px" }}
                        src={"5e709a571b62e.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"62cc3c128506279.Y3JvcCw1NjY5LDQ0MzQsMCw2MTc.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"1024x1024bb.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"16934754508.jpg"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"1631353406420.jpg"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "150px" }}
                        src={"1637153398716.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={
                          "agiba-petroleum-company-logo-1D991D1519-seeklogo.com.png"
                        }
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"Arda_Member_Logos_EGPC.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"Arda_Sponsor_Logos_Gold_Adnoc.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"aunnamed (1).png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"EGAS-e1560080422598-1-750x411.jpg"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"images (1).jpg"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"Logo-1.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"OC_02.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "150px" }}
                        src={"osoco-logo.jpg"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"suco-logo.webp"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "150px" }}
                        src={"unnamed.jpg"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "150px" }}
                        src={"unnamed.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"scimitar_production_egypt_ltd_spel_logo (11).png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "100px" }}
                        src={"images.png"}
                      />
                      <img
                        className=""
                        style={{ height: "100px", width: "150px" }}
                        src={"1637153398716.png"}
                      />
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
