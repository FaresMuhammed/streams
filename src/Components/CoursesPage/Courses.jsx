import "./Courses.css";

import Footer from "../HomePage/Footer/Footer";
import { Link, NavLink } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useState } from "react";

export default function Courses() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex" style={{ flexDirection: "column" }}>
        {/* <Header /> */}
        <div
          className="center flex-wrap p-md-5 p-2"
          style={{ position: "relative", color: "#EDEDED" }}
        >
          <img
            className="img11 blurr w-100"
            src={"directions_training_center_cover.jpg"}
            style={{
              position: "absolute",
              top: "0",
              zIndex: "-1",
              objectFit: "cover",
            }}
          />
          <div
            className="position-absolute top-0 start-0 bg-black w-100 "
            style={{ zIndex: "5", opacity: "0.3", height: "100%" }}
          ></div>

          <div className=" d-flex flex-wrap mt-5" style={{zIndex: '10'}}>
            <div className="col-lg-6 col-12 p-lg-5  mt-5">
              <h1 className="mb-lg-5 mb-3" style={{ fontSize: "35px" }}>
                Training Services
              </h1>
              <p className="mb-lg-5 mb-3">
                At Streamlines, we deliver expert training services designed to advance skills and knowledge across a wide range of industries. Serving both local and international clients—including leading companies like Khalda, Agiba, GUPCO, Rashpetco, Bapetco, ADNOC, and the Ministry of Energy and Mining in Sudan—our courses encompass all upstream disciplines, IT, machine learning, digital transformation, finance, economics, and more. Our training programs are tailored to meet the unique needs of each client, empowering professionals to excel and drive success in their fields.
              </p>
            </div>
          </div>
        </div>

        <div className="py-5" style={{ backgroundColor: "#EDEDED" }}>
          <div className="d-flex justify-content-center sublinks flex-wrap gap-4 mb-5">
            <NavLink to={"/courses"} className="cat-btn p-1">
              SUBSURFACE
            </NavLink>
            <NavLink to={"/S"} className="cat-btn p-1">
              WELLS
            </NavLink>
            <NavLink to={"/S"} className="cat-btn p-1">
              HSE
            </NavLink>
            <NavLink to={"/S"} className="cat-btn p-1">
              Business & Management
            </NavLink>
            <NavLink to={"/S"} className="cat-btn p-1">
              Digitalization
            </NavLink>
          </div>

          <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
            <div className="col-lg-3 col-md-6 col-10">
              <Link onClick={handleShow} className=" w-100">
                <button
                  className="p-3 w-100"
                  style={{
                    backgroundColor: "#FFFFFF",
                    width: "100%",
                    border: "none",
                  }}
                >
                  <h5 className="" style={{ color: "#CC2C2C" }}>
                    Development Geology
                  </h5>
                </button>
              </Link>
            </div>

            <div className="col-lg-3 col-md-6 col-10">
              <Link onClick={handleShow} className=" w-100">
                <button
                  className="p-3 w-100"
                  style={{
                    backgroundColor: "#FFFFFF",
                    width: "100%",
                    border: "none",
                  }}
                >
                  <h5 className="" style={{ color: "#CC2C2C" }}>
                    Development Geology
                  </h5>
                </button>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-10">
              <Link onClick={handleShow} className=" w-100">
                <button
                  className="p-3 w-100"
                  style={{
                    backgroundColor: "#FFFFFF",
                    width: "100%",
                    border: "none",
                  }}
                >
                  <h5 className="" style={{ color: "#CC2C2C" }}>
                    Development Geology
                  </h5>
                </button>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-10">
              <Link onClick={handleShow} className=" w-100">
                <button
                  className="p-3 w-100"
                  style={{
                    backgroundColor: "#FFFFFF",
                    width: "100%",
                    border: "none",
                  }}
                >
                  <h5 className="" style={{ color: "#CC2C2C" }}>
                    Development Geology
                  </h5>
                </button>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-10">
              <Link onClick={handleShow} className=" w-100">
                <button
                  className="p-3 w-100"
                  style={{
                    backgroundColor: "#FFFFFF",
                    width: "100%",
                    border: "none",
                  }}
                >
                  <h5 className="" style={{ color: "#CC2C2C" }}>
                    Development Geology
                  </h5>
                </button>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-10">
              <Link onClick={handleShow} className=" w-100">
                <button
                  className="p-3 w-100"
                  style={{
                    backgroundColor: "#FFFFFF",
                    width: "100%",
                    border: "none",
                  }}
                >
                  <h5 className="" style={{ color: "#CC2C2C" }}>
                    Development Geology
                  </h5>
                </button>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-10">
              <Link onClick={handleShow} className=" w-100">
                <button
                  className="p-3 w-100"
                  style={{
                    backgroundColor: "#FFFFFF",
                    width: "100%",
                    border: "none",
                  }}
                >
                  <h5 className="" style={{ color: "#CC2C2C" }}>
                    Development Geology
                  </h5>
                </button>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-10">
              <Link onClick={handleShow} className="w-100">
                <button
                  className="p-3 w-100"
                  style={{
                    backgroundColor: "#FFFFFF",
                    width: "100%",
                    border: "none",
                  }}
                >
                  <h5 className="" style={{ color: "#CC2C2C" }}>
                    Development Geology
                  </h5>
                </button>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-10">
              <Link onClick={handleShow} className="w-100">
                <button
                  className="p-3 w-100"
                  style={{
                    backgroundColor: "#FFFFFF",
                    width: "100%",
                    border: "none",
                  }}
                >
                  <h5 className="" style={{ color: "#CC2C2C" }}>
                    Development Geology
                  </h5>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Modal
          style={{ backgroundColor: "transparent", display: "flex" }}
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Courses</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-4">
              <div className="d-flex align-items-start gap-2 flex-wrap">
                <img
                  src={"course-2.jpg"}
                  height={"100px"}
                  style={{ objectFit: "cover" }}
                  className="rounded col-sm-3 col-12"
                  alt="img"
                />
                <div className="col-sm-6 col-12">
                  <h6>On Course</h6>
                  <p className="m-0 text-truncate mb-2">
                    How to teach an online course{" "}
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <h5 className="m-0 text-primary">1500$</h5>
                    <Link to={"/courses/course"}>
                      <button className="btn btn-danger">Learn more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="d-flex align-items-start gap-2 flex-wrap">
                <img
                  src={"course-2.jpg"}
                  height={"100px"}
                  style={{ objectFit: "cover" }}
                  className="rounded col-sm-3 col-12"
                  alt="img"
                />
                <div className="col-sm-6 col-12">
                  <h6>On Course</h6>
                  <p className="m-0 text-truncate mb-2">
                    How to teach an online course
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <h5 className="m-0 text-primary">1500$</h5>
                    <Link to={"/courses/course"}>
                      <button className="btn btn-danger">Learn more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="d-flex align-items-start gap-2 flex-wrap">
                <img
                  src={"/course-2.jpg"}
                  height={"100px"}
                  style={{ objectFit: "cover" }}
                  className="rounded col-sm-3 col-12"
                  alt="img"
                />
                <div className="col-sm-6 col-12">
                  <h6>On Course</h6>
                  <p className="m-0 text-truncate mb-2">
                    How to teach an online course{" "}
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <h5 className="m-0 text-primary">1500$</h5>
                    <Link to={"/courses/course"}>
                      <button className="btn btn-danger">Learn more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="d-flex align-items-start gap-2 flex-wrap">
                <img
                  src={"course-2.jpg"}
                  height={"100px"}
                  style={{ objectFit: "cover" }}
                  className="rounded col-sm-3 col-12"
                  alt="img"
                />
                <div className="col-sm-6 col-12">
                  <h6>On Course</h6>
                  <p className="m-0 text-truncate mb-2">
                    How to teach an online course{" "}
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <h5 className="m-0 text-primary">1500$</h5>
                    <Link to={"/courses/course"}>
                      <button className="btn btn-danger">Learn more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Footer />
      </div>
    </>
  );
}
