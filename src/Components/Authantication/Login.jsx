import axios from "axios";
import "./Auth.css";
import { useEffect, useRef, useState } from "react";
import Cookie from "cookie-universal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const Ref = useRef();
  useEffect(() => {
    Ref?.current?.focus();
  }, []);

  const cookie = Cookie();

  // useStates
  const [Formm, setFormm] = useState({
    email_or_phone: "",
    password: "",
  });
  const [Error, setError] = useState("");
  const [loading, setloading] = useState(false);

  // Functions
  function Handlechange(e) {
    setFormm({ ...Formm, [e.target.name]: e.target.value });
  }

  async function Handlesubmit(e) {
    e.preventDefault();
    setloading(true);
    try {
      const res = await axios.post("https://backend.slsog.com/api/login", {
        email_or_phone: Formm.email_or_phone,
        password: Formm.password,
      });
      setloading(false);
      console.log(res);
      const token = res.data.data.token;
      console.log(token);

      cookie.set("eng", token);
      // Navigate according to role
      const role = res.data.data.user.role;
      const go = role === "2001" ? "/dashboard/users" : (role === "1997"? "/dashboard/courses" :"/") ;
      window.location.pathname = `${go}`;
    } catch (err) {
      setloading(false);
      if (err.response.status === 422) {
        setError(<div className="center mb-3"> Wrong email or password </div>);
      } else {
        setError("Internal Server Error");
      }
    }
  }

  return (
    <>
      {loading && <Loading />}

      <div
        className="d-flex flex-wrap"
        style={{ backgroundColor: "#F7F7F7", height: "100vh"  , position: 'relative'}}
      >
        <Link to={'/'} className="home-btn">
          <button className="p-1 btn btn-primary">
              <FontAwesomeIcon icon={faArrowCircleLeft} style={{marginRight: '5px'}}/>
              Home page
          </button>
        </Link>


        <div className="center col-lg-4 col-12">
          <img
            src={"/Streamlines-logo-without-background.png"}
            className="mt-2 mb-3 st"
          />
        </div>
        <div className="center mb-5 col-lg-8 col-12">
          <Form
            className="form "
            onSubmit={Handlesubmit}
            style={{ position: "relative", backgroundColor: "white" }}
          >
            <div className="center">
              <div className="custom-form">
                <h1 className="h1 mb-5"> Login</h1>

                <Form.Group className="form-custom mb-5 d-flex">
                  <label>Email or phone</label>

                  <Form.Control
                    id="email_or_phone"
                    type="text"
                    placeholder="Enter your email or phone..."
                    name="email_or_phone"
                    value={Formm.email_or_phone}
                    onChange={Handlechange}
                    required
                    ref={Ref}
                  />
                </Form.Group>

                <Form.Group className="form-custom mb-3">
                  <label>Password </label>
                  <Form.Control
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={Formm.password}
                    onChange={Handlechange}
                    required
                    // minLength='6'
                  />
                  <Form.Label htmlFor="password">Password</Form.Label>
                </Form.Group>

                {Error !== "" && <span className="error ">{Error}</span>}

                <div className="center ">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </div>
            <div className="center" style={{ marginTop: "20px" }}>
              <p> Not a member?</p>
              <Link to={"/register"}>
                <p style={{ fontWeight: "bold" }}> Register Now</p>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
