import { Dropdown, DropdownItem, Modal, NavDropdown } from "react-bootstrap";
import Footer from "../HomePage/Footer/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CareersPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex mt-5" style={{ flexDirection: "column" }}>
      <div
        className="center flex-wrap p-md-5 p-3 mt-3"
        style={{ position: "relative", color: "#EDEDED" }}
      >
        <img
          className="img1 blurr w-100"
          src={"illustration-offshore-workers-image-xmentoys-112296-ezgif.com-webp-to-jpg-converter.jpg"}
          style={{ position: "absolute", top: "0", zIndex: "-1" }}
        />
        <div
          className="position-absolute top-0 start-0 bg-black w-100 "
          style={{ zIndex: "5", opacity: "0.3", height: "100%" }}
        ></div>

        <div className=" d-flex flex-wrap" style={{zIndex: '10'}}>
          <div className="col-lg-6 col-12 p-lg-5">
            <h1 className="mb-lg-5 mb-3" style={{ fontSize: "60px" }}>
              Careers
            </h1>
            <h3 className="mb-lg-4 mb-3">Join Our Team</h3>
            <p className="mb-lg-2" style={{ fontSize: "17px" }}>
              With offices worldwide, Rock Flow Dynamics is at the forefront of
              innovation in the energy industry. Our teams collaborate across
              continents, bringing diverse perspectives to solve complex
              challenges.
            </p>
            <p className="mb-lg-2" style={{ fontSize: "17px" }}>
              In addition to our global presence, our development center in
              Belgrade is a hub for cutting-edge technology and innovation.
              Here, talented professionals work on groundbreaking projects that
              shape the future of energy.
            </p>
            <p className="mb-lg-5 mb-3" style={{ fontSize: "17px" }}>
              Explore opportunities to grow your career with us and contribute
              to something truly impactful.
            </p>
          </div>

          <div className="col-lg-6 col-12 mt-md-5">
          <h1 className="mb-lg-5 mb-3 " style={{ fontSize: "60px" }}>
              Jobs
            </h1>
            <div className="col-12 w-100 mb-md-5 mb-3"></div>
            <Link
              onClick={handleShow}
              className=" w-100 "
              style={{ textDecoration: "none" }}
            >
              <div
                className="col-12 mt-md-5 mb-3 p-md-4 p-2 hv"
                style={{ backgroundColor: "white" , borderRadius: '13px'}}
              >
                <h6 style={{ color: "#277EC3" }}>DEVELOPMENT</h6>
                <h4 style={{ color: "black" }} className="apply-h3">
                  C++/QT Software Engineer – Belgrade, Serbia
                </h4>
              </div>
            </Link>
            <Link
              onClick={handleShow}
              className=" w-100 hv"
              style={{ textDecoration: "none" }}
            >
              <div
                className="col-12 mt-md-5 mb-3 p-md-4 p-2"
                style={{ backgroundColor: "white" , borderRadius: '13px' }}
              >
                <h6 style={{ color: "#277EC3" }}>DEVELOPMENT</h6>
                <h4 style={{ color: "black" }} className="apply-h3">
                  Software Automation Test Engineer with Python / AQA 
                </h4>
              </div>
            </Link>
            <Link
              onClick={handleShow}
              className=" w-100 hv"
              style={{ textDecoration: "none" }}
            >
              <div
                className="col-12 mt-md-5 mb-3 p-md-4 p-2"
                style={{ backgroundColor: "white" , borderRadius: '13px' }}
              >
                <h6 style={{ color: "#277EC3" }}>DEVELOPMENT</h6>
                <h4 style={{ color: "black" }} className="apply-h3">
                  Mathematician-Programmer (C++) – Belgrade, Serbia
                </h4>
              </div>
            </Link>
            <Link
              onClick={handleShow}
              className=" w-100 hv"
              style={{ textDecoration: "none" }}
            >
              <div
                className="col-12 mt-md-5 mb-3 p-md-4 p-2"
                style={{ backgroundColor: "white" , borderRadius: '13px' }}
              >
                <h6 style={{ color: "#277EC3" }}>DEVELOPMENT</h6>
                <h4 style={{ color: "black" }} className="apply-h3">
                  Reservoir Engineer with Integrated Modeling Experience                </h4>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Modal
        style={{
          backgroundColor: "transparent",
          display: "flex",
      
        }}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Jop opportunity</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-4">
            <div className="d-flex align-items-start gap-2 flex-wrap">
              <div className="col-12">
                <h5 className="mb-4"> Fresh graduate</h5>
                <p className="m-0 text-truncate mb-3">
                  ● How to teach an online course{" "}
                </p>
                <p className="m-0 text-truncate mb-3">
                  ● How to teach an online course{" "}
                </p>
                <p className="m-0 text-truncate mb-3">
                  ● How to teach an online course{" "}
                </p>
                <p className="m-0 text-truncate mb-3">
                  ● How to teach an online course{" "}
                </p>
              </div>
              <Link to={"/applynow"}>
                <button className="btn btn-danger mt-3">Apply now</button>
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div>
        <Footer />
      </div>
    </div>
  );
}
