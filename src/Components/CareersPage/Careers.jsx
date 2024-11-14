import { Dropdown, DropdownItem, Modal, NavDropdown } from "react-bootstrap";
import Footer from "../HomePage/Footer/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CareersPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex" style={{ flexDirection: "column" }}>
      <div
        className="center flex-wrap p-5 div-cover"
        style={{ position: "relative", color: "#EDEDED" }}
      >
        <img
          className="img1 blur w-100"
          src={"nsplsh_47726d77566e5653536455~mv2_d_3626_2479_s_4_2.webp"}
          style={{ position: "absolute", top: "0", zIndex: "-1" }}
        />

        <div className="mt-5 d-flex flex-wrap">
          <div className="col-lg-6 col-12 p-lg-5  mt-lg-5">
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

          <div className="col-lg-6 col-12 mt-5">
            <div className="col-12 w-100 mb-md-5 mb-3"></div>
            <Link
              onClick={handleShow}
              className=" w-100"
              style={{ textDecoration: "none" }}
            >
              <div
                className="col-12 mt-md-5 mb-3 p-md-4 p-2"
                style={{ backgroundColor: "white" }}
              >
                <h6 style={{ color: "#277EC3" }}>DEVELOPMENT</h6>
                <h3 style={{ color: "black" }} className="apply-h3">
                  C++/QT Software Engineer – Belgrade, Serbia
                </h3>
              </div>
            </Link>
            <Link
              onClick={handleShow}
              className=" w-100"
              style={{ textDecoration: "none" }}
            >
              <div
                className="col-12 mt-md-5 mb-3 p-md-4 p-2"
                style={{ backgroundColor: "white" }}
              >
                <h6 style={{ color: "#277EC3" }}>DEVELOPMENT</h6>
                <h3 style={{ color: "black" }} className="apply-h3">
                  Software Automation Test Engineer with Python / AQA / SDET –
                  Belgrade, Serbia{" "}
                </h3>
              </div>
            </Link>
            <Link
              onClick={handleShow}
              className=" w-100"
              style={{ textDecoration: "none" }}
            >
              <div
                className="col-12 mt-md-5 mb-3 p-md-4 p-2"
                style={{ backgroundColor: "white" }}
              >
                <h6 style={{ color: "#277EC3" }}>DEVELOPMENT</h6>
                <h3 style={{ color: "black" }} className="apply-h3">
                  Mathematician-Programmer (C++) – Belgrade, Serbia
                </h3>
              </div>
            </Link>
            <Link
              onClick={handleShow}
              className=" w-100"
              style={{ textDecoration: "none" }}
            >
              <div
                className="col-12 mt-md-5 mb-3 p-md-4 p-2"
                style={{ backgroundColor: "white" }}
              >
                <h6 style={{ color: "#277EC3" }}>DEVELOPMENT</h6>
                <h3 style={{ color: "black" }} className="apply-h3">
                  Reservoir Engineer with Integrated Modeling Experience –
                  Belgrade, Serbia{" "}
                </h3>
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
              <Link to={"/contactus"}>
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
