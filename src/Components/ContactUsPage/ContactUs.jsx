import Footer from "../HomePage/Footer/Footer";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";

export default function ContactUs() {
  const Ref = useRef();
  useEffect(() => {
    Ref.current.focus();
  }, []);

  const Navigate = useNavigate();
  const [Load, setLoad] = useState(false);
  const [Error, setError] = useState("");

  const [Upadateform, setUpadateform] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  async function Handlesubmit(e) {
    setLoad(true);
    e.preventDefault();
    try {
      await axios.post("https://backend.slsog.com/api/contact", {
        name: Upadateform.name,
        email: Upadateform.email,
        country: Upadateform.country,
        phone: Upadateform.phone,
        message: Upadateform.message,
      });
      setLoad(false);
      Navigate("/contactus");
      Upadateform.name = ''
      Upadateform.email = '' ,
      Upadateform.country = '',
      Upadateform.phone = '',
      Upadateform.message = ''
    } catch (err) {
      setLoad(false);
      setError(err.response.data.message);
    }
  }

  function Onchange(e) {
    setUpadateform({ ...Upadateform, [e.target.name]: e.target.value });
  }

  return (
    <>
      {Load && <Loading />}
      <div className="d-flex flex-wrap" style={{ backgroundColor: "#091929" }}>
        <div
          className="center flex-wrap p-md-5 p-3"
          style={{ position: "relative", color: "#EDEDED" }}
        >
          <div className="mt-5 d-flex flex-wrap">
            <div className="col-lg-6 col-12 p-md-5 p-1 mt-5 mb-md-5 ">
              <h1
                className="mb-md-5 mb-3 "
                style={{ fontSize: "40px", fontWeight: "bold" }}
              >
                Contact
              </h1>

              <p className="mb-md-5 mb-5 mb-3" style={{ fontSize: "17px" }}>
                If you would like to learn more about tNavigator or request a
                demo license of our software, please fill in the contact form
                and one of our team will get in touch with you.
              </p>
            </div>
            <div className="col-lg-6 col-12 mb-5 mt-md-5">
              <Form onSubmit={Handlesubmit}>
                <div className="p-md-5 p-1">
                  <h4 className="mb-md-5 mb-5">Contact us: </h4>

                  <Form.Group className="form-custom mb-5">
                    <label>Name:</label>
                    <Form.Control
                      className="p-3"
                      id="name"
                      type="text"
                      placeholder="Please enter your name..."
                      name="name"
                      value={Upadateform.name}
                      onChange={Onchange}
                      required
                      ref={Ref}
                    />
                  </Form.Group>

                  <Form.Group className="form-custom mb-5">
                    <label>Country: </label>
                    <Form.Control
                      className="p-3"
                      id="country"
                      type="text"
                      placeholder="Please enter your country..."
                      name="country"
                      value={Upadateform.country}
                      onChange={Onchange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="form-custom mb-5">
                    <label>Email: </label>
                    <Form.Control
                      className="p-3"
                      id="email"
                      type="email"
                      placeholder="Please enter your email..."
                      name="email"
                      value={Upadateform.email}
                      onChange={Onchange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="form-custom mb-5">
                    <label>Phone number:</label>
                    <Form.Control
                      className="p-3"
                      id="phone"
                      type="number"
                      placeholder="Please enter your phone number..."
                      name="phone"
                      value={Upadateform.phone}
                      onChange={Onchange}
                    />
                  </Form.Group>

                  <Form.Group className="form-custom mb-3">
                    <label>Your message:</label>
                    <Form.Control
                      className="p-3"
                      id="message"
                      as="textarea"
                      rows={3}
                      placeholder="Please enter your message..."
                      name="message"
                      value={Upadateform.message}
                      onChange={Onchange}
                    />
                  </Form.Group>
                  {Error !== "" && (
                    <div className="alert alert-danger" role="alert">
                      {Error}
                    </div>
                  )}
                  <div className="">
                    <button className="btn btn-primary col-12" type="submit">
                      Send message
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
