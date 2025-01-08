import "./Header.css";

import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faBars,
  faClose,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
import Cookie from "cookie-universal";
import Loading2 from "../../Loading/Loading2";
// import Loading2 from "Components/Loading/Loading2";

export default function Header(props) {
  const [showSlider, setShowslider] = useState(false);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [loading, setLoading] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const [currentUser, setcurrentUser] = useState(""); // to get current user

  // Useeffect to get current user
  const cookie = Cookie();
  const token = cookie.get("eng");
  // console.log(token);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://backend.slsog.com/api/user", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setcurrentUser(res.data.name))
      .finally(() => setLoading(false));
  }, []);
  // console.log(currentUser);

      // Logout function
      function Logout() {
        axios.get( 'https://backend.slsog.com/api/logout' , {
          headers: { Authorization: "Bearer " + token }, 
        } )
        window.location.pathname = '/login'
        cookie.remove('eng')
    }
  
  return (
    <>
      <div className={`slider p-4  ${showSlider ? "goIn" : "goOut"} `} style={{ zIndex: '202'}}>
        <div className="icon2" onClick={() => setShowslider((prev) => !prev)}>
          <FontAwesomeIcon icon={faClose} />
        </div>
        <div className="mt-5">
          <NavLink to={"/"} className="Link2 ">
            <h5>HOME</h5>
          </NavLink>
          <NavLink to={"/aboutus"} className="Link2">
            <h5>ABOUT US</h5>
          </NavLink>

          <Dropdown style={{ marginLeft: "-12px", marginTop: "35px" }}>
            <NavLink >
              <Dropdown.Toggle
                variant="transparent"
                style={{
                  color: "white",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "17px",
                }}
              >
                OPERATIONS
              </Dropdown.Toggle>
            </NavLink>
            <Dropdown.Menu>
              <Dropdown.Item active>
                <NavLink
                  to={"/artificalleft"}
                  style={{ textDecoration: "none", color: "#2D2727" }}
                >
                  ARTIFICAL LIFT
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink
                  to={"/testing"}
                  style={{ textDecoration: "none", color: "#2D2727" }}
                >
                  TESTING
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink
                  to={"/enhancing"}
                  style={{ textDecoration: "none", color: "#2D2727" }}
                >
                  ENHANCING
                </NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <NavLink to={"/courses"} className="Link2">
            <h5>TRAINING</h5>
          </NavLink>
          <NavLink to={"/software"} className="Link2">
            <h5>SOFTWARE</h5>
          </NavLink>
          <NavLink to={"/projects"} className="Link2">
            <h5>CAREERS</h5>
          </NavLink>

          <NavLink to={"/contactus"} className="Link2">
            <h5>CONTACT US</h5>
          </NavLink>
        </div>
      </div>

      <div className="Header w-100" style={{zIndex: '100'}}>
        <nav
          className={`nav  ${show ? `show ${props.showw}` : "hide"} 
          `}
        >
          <div className={`div1 `}>
          <Link to={'/'}>

            <div className="div2 h-100">
                <img
                  src={"/Streamlines-logo-without-background.png"}
                  className="img2"
                />
            </div>
            </Link>


            <div className="d-flex h-00">
              <div className="d-flex align-items-center gap-5 ">
                <div className="gap-5 none ">
                  <div className="d-flex align-items-center">
                    <NavLink to={"/"} className="Link topbar">
                      HOME
                    </NavLink>

                    <NavLink to={"/aboutus"} className="Link topbar">
                      ABOUT US
                    </NavLink>

                    <Dropdown >
                      <NavLink className="Link topbar" >
                        <Dropdown.Toggle
                          variant="transparent"
                          style={{
                            border: "none",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                            OPERATIONS
                        </Dropdown.Toggle>
                      </NavLink>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <NavLink
                            to={"/artificalleft"}
                            style={{ textDecoration: "none", color: "#2D2727" }}
                          >
                            ARTIFICAL LIFT
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <NavLink
                            to={"/testing"}
                            style={{ textDecoration: "none", color: "#2D2727" }}
                          >
                            TESTING
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <NavLink
                            to={"/enhancing"}
                            style={{ textDecoration: "none", color: "#2D2727" }}
                          >
                            ENHANCING
                          </NavLink>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <NavLink to={"/courses"} className="Link topbar">
                      TRAINING
                    </NavLink>

                    <NavLink to={"/software"} className="Link topbar">
                      SOFTWARE
                    </NavLink>

                    <NavLink to={"/projects"} className="Link topbar">
                      CAREERS
                    </NavLink>

                    <NavLink to={"/contactus"} className="Link topbar">
                      CONTACT US
                    </NavLink>
                  </div>
                </div>

                <div className="center align-items-center div3">
                  {loading ? (
                    <Loading2 />
                  ) : currentUser ? (

                      <Dropdown>
                      <div className="Link topbar =">
                        <Dropdown.Toggle
                          variant="danger"
                          style={{
                            border: "none",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        > <FontAwesomeIcon icon={faUser} style={{marginRight: '5px'}}/>
                          {currentUser.slice(0 , 10) + '...'}
                        </Dropdown.Toggle>
                      </div>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <div onClick={Logout}
                            style={{ textDecoration: "none", color: "#2D2727" }}
                          >
                            Logout
                          </div>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                  ) : (
                    <Link to={"/login"} style={{ textDecoration: "none" }}>
                      <button className="arrow button rounded-pill d-flex align-items-center justify-content-center gap-1">
                        Login
                        <FontAwesomeIcon
                          icon={faArrowDown}
                          style={{ transform: "rotate(-45deg)" }}
                          className="pt-1 "
                          fontWeight={"200"}
                        />
                      </button>
                    </Link>
                  )}

                  <div className="icon" onClick={() => setShowslider(true)}>
                    <FontAwesomeIcon icon={faBars} color="black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
