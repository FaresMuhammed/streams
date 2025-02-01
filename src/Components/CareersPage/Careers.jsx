import { Modal } from "react-bootstrap";
import Footer from "../HomePage/Footer/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookie from "cookie-universal";
import axios from "axios";
import parse from "html-react-parser";
import Showskelton from "../Skelton/Skelton";

export default function CareersPage() {
  const [ID, setID] = useState("");
  const [show, setShow] = useState(false);

  const [singleJob, setSingleJob] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    const filterJob = jobs?.filter((item) => item.id == Number(id));
    setSingleJob(filterJob);
    setID(id);
    setShow(true);
  };

  const cookie = Cookie();
  const token = cookie.get("eng");
  const [loading, setloading] = useState(true);
  const [jobs, setjobs] = useState([]);

  console.log(singleJob);

  useEffect(() => {
    axios
      .get(`https://backend.slsog.com/api/jobs`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((data) => {
        setjobs(data.data);
      })
      .finally(() => setloading(false))
      .catch((err) => err);
  }, []);

  const ShowJobs = jobs.map((job) => (
    <div
      onClick={() => handleShow(job.id)}
      className=" w-100 "
      style={{ textDecoration: "none", lineBreak: "anywhere" }}
    >
      <div
        className="col-12 mt-md-5 mb-3 p-md-4 p-2 hv hv"
        style={{ backgroundColor: "white", borderRadius: "13px" }}
      >
        <h6 style={{ color: "#277EC3" }}>{job.title}</h6>
        <h4 style={{ color: "black" }} className="apply-h3">
          {job.category}
        </h4>
      </div>
    </div>
  ));

  return (
    <div className="d-flex mt-5" style={{ flexDirection: "column" }}>
      <div
        className="center flex-wrap p-md-5 p-3 mt-3"
        style={{ position: "relative", color: "#EDEDED" }}
      >
        <img
          className="img1 blurr w-100"
          src={
            "illustration-offshore-workers-image-xmentoys-112296-ezgif.com-webp-to-jpg-converter.jpg"
          }
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

        <div className=" d-flex flex-wrap" style={{ zIndex: "10" }}>
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

            {loading ? (
              <div style={{ zIndex: "10" }}>
                <Showskelton height="70px" length="4" classes="col-12 mb-3" />
              </div>
            ) : (
              ShowJobs
            )}
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
            <h2 style={{ lineBreak: "anywhere" }}>{singleJob?.[0]?.title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-4">
            <div className="">
              <div style={{ lineBreak: "anywhere" }} className="col-12">
                {singleJob?.[0]?.description &&
                  parse(singleJob?.[0]?.description)}
              </div>

              <div className="col-12">
                <Link to={`/applynow/${ID}`}>
                  <button className="btn btn-danger mt-3 col-12">
                    Apply now
                  </button>
                </Link>
              </div>
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
