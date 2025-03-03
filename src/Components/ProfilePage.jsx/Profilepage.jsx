import { useEffect, useState } from "react";
import axios from "axios";
import Cookie from "cookie-universal";
import Footer from "../HomePage/Footer/Footer";
import Showskelton from "../Skelton/Skelton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import TransformDate from "../DateFunction/Date";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Profilepage() {
  const [currentUser, setcurrentUser] = useState("");
  const [Fav, setFav] = useState([]);
  const [Usercourses, setUsercourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const cookie = Cookie();
  const token = cookie.get("eng");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://backend.slsog.com/api/user", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setcurrentUser(res.data))
      .finally(() => setLoading(false));
  }, []);
  
  useEffect(() => {
    axios
      .get(`https://backend.slsog.com/api/users/wishlist`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((data) => {
        setFav(data.data.wishlist)
      })
      .catch((err) => err);
  }, []);
  console.log(Fav);
  

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://backend.slsog.com/api/user/courses", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setUsercourses(res.data.courses))
      .finally(() => setLoading(false));
  }, []);

  const Showcourses = Usercourses.map((course) => (
    <div className="mb-4 ">
      <div className="d-flex align-items-start gap-1 flex-wrap">
          <img
            src={`http://backend.slsog.com${course.image}`}
            height={"120px"}
            style={{ objectFit: "cover" }}
            className="rounded col-md-4 col-5"
            alt="img"
          />
          <div className="col-6">
            <h6>{course.classification}</h6>
            <p className="m-0 text-truncate mb-1">{course.name}</p>
            <div className=" align-items-center gap-3">
              <h5 className="m-0 text-primary mb-1">{course.price}EGP</h5>
              <Link to={`/courses/${course.id}`}>
                <button className="btn btn-danger">Learn more</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
  ))

  const Showfav = Fav.map((fav) => (
    <div className="mb-4 ">
      <div className="d-flex align-items-start gap-1 flex-wrap">
          <img
            src={`http://backend.slsog.com${fav.image}`}
            height={"120px"}
            style={{ objectFit: "cover" }}
            className="rounded col-md-4 col-5"
            alt="img"
          />
          <div className="col-6">
            <h6>{fav.classification}</h6>
            <p className="m-0 text-truncate mb-1">{fav.name}</p>
            <div className=" align-items-center gap-3">
              <h5 className="m-0 text-primary mb-1">{fav.price}EGP</h5>
              <Link to={`/courses/${fav.id}`}>
                <button className="btn btn-danger">Learn more</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
  ))

  return (
    <>
      {loading ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
          <Showskelton height="400px" length="1" classes="col-12 p-5 mt-5 " />
        </div>
      ) : (
        <div className="py-md-5 p-3 mt-5 d-flex flex-wrap center">
          <div className="mt-4 p-3 border rounded col-lg-10 col-12 ">
            <div className="center">
              <h2 className="mb-4 center fw-bold" style={{ color: ''}}>
                <FontAwesomeIcon
                  style={{ paddingRight: "5px" ,  fontSize: '40px'}}
                  icon={faUserCircle}
                />
                YOUR INFORMATIONS
              </h2>
            </div>

           <div className="d-flex flex-wrap">
            {/*    <div className="d-flex flex-wrap  col-md-6 col-12">
                <div className="col-12 gap-2 d-flex">
                  <h5>Name:</h5>
                  <p>{currentUser.name}</p>
                </div>
                <div className="col-12 gap-2 d-flex">
                  <h5>Email:</h5>
                  <p>{currentUser.email}</p>
                </div>
                <div className="col-12 gap-2 d-flex">
                  <h5>Phone:</h5>
                  <p>{currentUser.phone}</p>
                </div>
                <div className="col-12 gap-2 d-flex">
                  <h5>Joined at:</h5>
                  <p>{TransformDate(currentUser.created_at)}</p>
                </div>
                <div className="col-12 gap-2 d-flex">
                  <h5>Company:</h5>
                  <p>{currentUser.company !== null ? currentUser.company : 'none'}</p>
                </div>
              </div> */}
                          <div className="col-12 d-flex flex-wrap mt-3">
                            <div className="col-lg-4 col-md-6 col-12 mb-3">
                              <div>
                                <h5 style={{ color: "#8A8A9A" }}>
                                  NAME
                                </h5>
                                <h5> {currentUser.name} </h5>
                              </div>
                            </div>
              
                            <div className="col-lg-4 col-md-6 col-12 mb-3">
                              <div>
                                <h5 style={{ color: "#8A8A9A" }}>EMAIL</h5>
                                <h5> {currentUser.email} </h5>
                              </div>
                            </div>
              
                            <div className="col-lg-4 col-md-6 col-12 mb-3">
                              <div>
                               <h5 style={{ color: "#8A8A9A" }}>PHONE</h5>
                                <h5> {currentUser.phone} </h5>
                              </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12 mb-3">
                              <div>
                              <h5 style={{ color: "#8A8A9A" }}>COMPANY</h5>
                              <h5> {currentUser.company !== null ? currentUser.company : 'none'}</h5>
                              </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12 mb-3">
                              <div>
                              <h5 style={{ color: "#8A8A9A" }}>JOINED AT</h5>
                              <h5>{TransformDate(currentUser.created_at)}</h5>
                              </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12 mb-3">
                              <div>
                              <h5 style={{ color: "#8A8A9A" }}>UPDATED AT</h5>
                              <h5>{TransformDate(currentUser.updated_at)}</h5>
                              </div>
                            </div>
                            
                          </div>

             <div className="col-12">
              <div className="col-12 gap-2 mb-2 d-flex">
                <h5 className="mb-3" style={{ color: "#8A8A9A" }}>FAVOURITS:</h5>
                <h5>{Fav[0] == undefined && 'none'}</h5>
              </div>
              {Fav[0] !== undefined && (Showfav)}
             </div>

             <div className="col-12">
              <div className="col-12 gap-2 mb-2 d-flex">
                <h5 className="mb-3" style={{ color: "#8A8A9A" }}>COURSES:</h5>
                <h5>{Usercourses[0] == undefined && 'none'}</h5>
              </div>
              {Usercourses[0] !== undefined && (Showcourses)}
             </div>

          </div>
            <Link to={`/update/${currentUser.id}`}>
              <Button className="btn">Update</Button>
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
