import "./Courses.css";

import Footer from "../HomePage/Footer/Footer";
import { Link, NavLink } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Cookie from "cookie-universal";

export default function Courses() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setloading] = useState(false);
  const [Categeories, setCategeories] = useState([]);
  const [Subcategeories, setSubcategeories] = useState([]);

  useEffect(() => {
    setloading(true);
    axios
      .get(`https://backend.slsog.com/api/categories`)
      .then((data) => {
        setCategeories(data.data);
      })
      .finally(() => setloading(false))
      .catch((err) => err);
  }, []);

  useEffect(() => {
    axios
      .get(`https://backend.slsog.com/api/sub-categories`)
      .then((data) => {
        setSubcategeories(data.data);
      })
      .catch((err) => err);
  }, []);

  const Show = Categeories.map( (cat) =>(
    <NavLink onClick={() => Showsubcategories(cat.id)}  className=" sub p-2 rounded">
      {cat.title}
    </NavLink>
   ) )

  const Showsubcategories = (id) => {
    const filterJob = Subcategeories?.filter((item) => item.id == Number(id));
    setSubcategeories(filterJob);
  };
  console.log(Subcategeories);

    const Show2 = Subcategeories.map( (subcat) =>(
              <Link onClick={handleShow} className=" w-100 ">
                <button
                  className="p-3 w-100 rounded"
                  style={{
                    backgroundColor: "#FFFFFF",
                    width: "100%",
                    border: "none",
                  }}
                >
                  <h5 className="" style={{ color: "#CC2C2C" }}>
                    {subcat.title}
                  </h5>
                </button>
              </Link>
  ));
  
  return (
    <>
      <div className="d-flex" style={{ flexDirection: "column" }}>
        <div
          className="center flex-wrap p-md-5 p-2"
          style={{ position: "relative", color: "#EDEDED" }}
        >
          <img
            className="img11 blurr w-100"
            src={"cd13224.jpg"}
            style={{
              position: "absolute",
              top: "0",
              zIndex: "1",
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
            {Show}
          </div>

          <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
            <div className="col-lg-3 col-md-6 col-10 ">
              {Show2}
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
