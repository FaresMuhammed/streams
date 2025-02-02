import Footer from "../HomePage/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import Cookie from "cookie-universal";
import Showskelton from "../Skelton/Skelton";

export default function SingleCourse() {
  const { ID } = useParams();
  const [Course, setCourse] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setloading] = useState(true);

  const [currentUser, setcurrentUser] = useState(""); // to get current user

  // Useeffect to get current user
  const cookie = Cookie();
  const token = cookie.get("eng");
  // console.log(token);

  useEffect(() => {
    axios
      .get("https://backend.slsog.com/api/user", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setcurrentUser(res.data.name));
  }, []);

  useEffect(() => {
    axios
      .get(`https://backend.slsog.com/api/courses/${ID}`)
      .then((data) => {
        setCourse(data.data);
      })
      .finally(() => setloading(false))
      .catch((err) => err);
  }, []);

  useEffect(() => {
    axios
      .get(`https://backend.slsog.com/api/user/courses`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((data) => {
        setCourses(data?.data?.courses);
      })
      .finally(() => setloading(false))
      .catch((err) => err);
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
          <Showskelton height="400px" length="1" classes="col-12 p-5 mt-5 " />
        </div>
      ) : (
        <div className="py-md-5 p-4 mt-5 d-flex flex-wrap gap-md-4 center">
          <div className="mt-5 p-md-5 p-3 border rounded col-lg-10 col-12 ">
            <div className="d-flex">
              <h5 className="mb-4">{Course.classification}</h5>
              <h6 className="mt-1" style={{ color: "#7A7A7A" }}>
                ({Course.discipline})
              </h6>
            </div>
            <div
              className="d-flex flex-wrap gap-lg-5 gap-3"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className=" col-lg-6 col-12 gap-3">
                {/* <div className="d-flex gap-1"> */}
                {/* <FontAwesomeIcon icon={faUserCircle} color="#C5C5C5" fontSize={'40px'}/> */}
                {/* </div> */}

                <h2 className="col-12">{Course.name}</h2>
                {/* <div>
                            <h6 style={{color: '#7A7A7A'}}>Review</h6>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                            </div>
                        </div> */}
              </div>
              <div className="d-flex align-items-center col-lg-4 col-12  gap-2 ">
                {/* <h4 className="m-0" style={{color: "gray",textDecoration: "line-through"}}>69$</h4> */}
                <h2 className="m-0 text-danger">{Course.price}EGP</h2>
                {courses.find((item) => item.id == ID) ? (
                  <button disabled className="btn btn-danger">BOOKED</button>
                ) : (
                  <Link
                    to={currentUser ? `/coursespayment/${Course.id}` : "/login"}
                    target="_blank"
                  >
                    <button className="btn btn-danger">BOOK NOW</button>
                  </Link>
                )}
              </div>
            </div>

            <img
              src={`http://backend.slsog.com${Course.image}`}
              style={{ objectFit: "cover" }}
              className="rounded col-12 mt-4 mb-4"
              alt="img"
            />

            <div
              className="d-flex flex-wrap gap-5 center"
              style={{ lineBreak: "anywhere" }}
            >
              {/* <div className="d-flex gap-2 col-3" style={{ color: '#B0B0B0'}}>
                        <FontAwesomeIcon icon={faSquarePollVertical} fontSize={'20px'}/>
                        <h6>Overview</h6>
                    </div>
                    <div className="d-flex gap-2 col-3" style={{ color: '#B0B0B0'}}>
                        <FontAwesomeIcon icon={faUserAlt} fontSize={'20px'}/>
                        <h6> Instructor</h6>
                    </div>
                    <div className="d-flex gap-2 col-3" style={{ color: '#B0B0B0'}}>
                        <FontAwesomeIcon icon={faComment} fontSize={'20px'}/>
                        <h6>Reviews</h6>
                    </div> */}
              {/* {parse(Course.description)} */}

              <h6 style={{ lineBreak: "anywhere" , textAlign: 'justify'}} className="col-12">
                {parse(Course?.description || "")}
              </h6>
            </div>
          </div>

          {/* <div className="col-md-3 col-12 py-5 p-2 mt-5 border">
                <div className="mb-5">
                    <h4 className="mb-4">ALL COURSES</h4>
                    <p className="mb-2">Information Technology</p>
                    <p className="mb-2">Operations & Production</p>
                    <p className="mb-2">Process Engineering</p>
                    <p className="mb-2">Project Management</p>
                    <p className="mb-2">Project Academy</p>
                    <p className="mb-2">Passive Income</p>
                    <p className="mb-2">Teaching Online</p>
                </div>
                <div>
                    <h4 className="mb-4">Latest Courses</h4>
                    <p className="mb-1">Development Geology School I</p>
                        <h5 className="mb-4" style={{color: '#00D637'}}>Free</h5>
                    <p className="mb-1">Advanced Process Automation & Machine Learning Using Python Develop-</p>                        <h5 className="mb-4" style={{color: '#00D637'}}>Free</h5>

                    <p className="mb-1">Process Automation & Machine Learning Using Python Applied To Develop</p>                        <h5 className="mb-4" style={{color: '#00D637'}}>Free</h5>

                </div>
            </div> */}
        </div>
      )}
      <Footer />
    </>
  );
}
