import Footer from "../HomePage/Footer/Footer";
import Form from "react-bootstrap/Form";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";

export default function Applynow() {
  const Ref = useRef();
  useEffect(() => {
    Ref.current.focus();
  }, []);

  const navigate = useNavigate();
  const { ID } = useParams();
  const [loading, setloading] = useState(false);
  const [Error, setError] = useState("");

  const [Formm, setFormm] = useState({
    job_id: ID,
    full_name: "",
    country: "",
    email: "",
    phone: "",
    gpa: "",
    cv: "",
  });

  function Handlechange(e) {
    setFormm({
      ...Formm,
      [e.target.name]:
        e.target.name === "cv" ? e.target.files[0] : e.target.value,
    });
  }

  async function Handlesubmit(e) {
    e.preventDefault();
    setloading(true);
    const formData = new FormData();
    formData.append("full_name", Formm.full_name);
    formData.append("country", Formm.country);
    formData.append("email", Formm.email);
    formData.append("phone", Formm.phone);
    formData.append("cv", Formm.cv);
    formData.append("job_id", Formm.job_id);
    formData.append("gpa", Formm.gpa);

    try {
      await axios.post("https://backend.slsog.com/api/job-requests", formData);
      setloading(false);
      navigate("/projects");
    } catch (err) {
      setloading(false);
      setError(err.response.data.message);
    }
  }

  return (
    <>
      {loading && <Loading />}

      <div className="d-flex flex-wrap" style={{ backgroundColor: "#091929" }}>
        <div
          className="center flex-wrap p-md-5 p-3"
          style={{ position: "relative", color: "#EDEDED" }}
        >
          <div className="mt-5 d-flex flex-wrap">
            <div className="col-lg-6 col-12 p-md-5 p-1 mt-5 mb-5 ">
              <h1
                className="mb-md-5 mb-3 "
                style={{ fontSize: "40px", fontWeight: "bold" }}
              >
                Apply now
              </h1>

              <p className="mb-md-5 mb-5 mb-3" style={{ fontSize: "17px" }}>
                If you would like to learn more about tNavigator or request a
                demo license of our software, please fill in the contact form
                and one of our team will get in touch with you.
              </p>
              <div className="py-md-5 ">
                {/* <h6 className="mb-md-3">TECHNICAL SUPPORT</h6>
                <div className="d-flex align-items-center gap-2 mb-md-5 mb-3">
                  <FontAwesomeIcon
                    className="rounded-pill"
                    icon={faMailBulk}
                    style={{
                      color: "#277EC3",
                      fontSize: "25px",
                      border: "1px solid #277EC3",
                      padding: "10px",
                    }}
                  />
                  faresmuhammed75@gmail.com
                </div>
                <h6 className="mb-md-3">SALES ENQUIRIES</h6>
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon
                    className="rounded-pill"
                    icon={faMailBulk}
                    style={{
                      color: "#277EC3",
                      fontSize: "25px",
                      border: "1px solid #277EC3",
                      padding: "10px",
                    }}
                  />
                  faresmuhammed75@gmail.com
                </div> */}
              </div>
            </div>

            <div className="col-lg-6 col-12 mb-5 mt-md-5">
              <Form onSubmit={Handlesubmit}>
                <div className="p-md-5 p-1">
                  <h4 className="mb-md-5 mb-5"> Apply now: </h4>

                  <Form.Group className="form-custom mb-5">
                    <label>FULL NAME:</label>
                    <Form.Control
                      className="p-3"
                      id="full_name"
                      type="text"
                      placeholder="Please enter your full name..."
                      name="full_name"
                      value={Formm.full_name}
                      onChange={Handlechange}
                      required
                      ref={Ref}
                    />
                  </Form.Group>

                  <Form.Group className="form-custom mb-5">
                    <label>COUNTRY: </label>
                    <Form.Control
                      className="p-3"
                      id="country"
                      type="text"
                      placeholder="Please enter your country..."
                      name="country"
                      value={Formm.country}
                      onChange={Handlechange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="form-custom mb-5">
                    <label>EMAIL: </label>
                    <Form.Control
                      className="p-3"
                      id="email"
                      type="email"
                      placeholder="Please enter your email..."
                      name="email"
                      value={Formm.email}
                      onChange={Handlechange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="form-custom mb-5">
                    <label>PHONE NUMBER:</label>

                    <Form.Control
                      className="p-3"
                      id="phone"
                      type="number"
                      placeholder="Please enter your phone number..."
                      name="phone"
                      value={Formm.phone}
                      onChange={Handlechange}
                    />
                  </Form.Group>

                  <Form.Group className="form-custom mb-5">
                    <Form.Label>Your grade</Form.Label>
                    <Form.Select
                      name="gpa"
                      value={Formm.gpa}
                      onChange={Handlechange}
                    >
                      <option disabled value="">
                        Select grade:
                      </option>
                      <option value="Excellent">Excellent</option>
                      <option value="Very good">Very good</option>
                      <option value="Good">Good</option>
                      <option value="Fair">Fair</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="form-custom mb-3">
                    <label>CV: </label>
                    <Form.Control
                      className="p-3"
                      id="cv"
                      type="file"
                      accept=".pdf,.doc,.docx,image/*"
                      onChange={Handlechange}
                      name="cv"
                      required
                    />
                  </Form.Group>

                  {Error !== "" && (
                    <div className="alert alert-danger" role="alert">
                      {Error}
                    </div>
                  )}

                  <div className="center ">
                    <button className="btn btn-primary " type="submit">
                      Apply
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
