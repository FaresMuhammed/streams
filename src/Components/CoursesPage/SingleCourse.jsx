import Footer from "../HomePage/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import Cookie from "cookie-universal";
import Showskelton from "../Skelton/Skelton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faHeart,
  faLocationDot,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function SingleCourse() {
  const { ID } = useParams();
  const [Course, setCourse] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setloading] = useState(true);

  const [currentUser, setcurrentUser] = useState(""); // to get current user

  const [isFav, setIsFav] = useState(true);

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
  console.log(currentUser);
  

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

  useEffect(() => {
    axios
      .get(`https://backend.slsog.com/api/users/wishlist`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((data) => {
        const fav = data.data.wishlist?.filter((item) => item.id == ID);
        if (fav.length > 0) setIsFav(false);
      })
      .catch((err) => err);
  }, []);

  async function Favourite() {
    {currentUser ? (
      Addtofavourite() ,
      setIsFav(false)
    ) : 
    ( 
      // <Link to={'/login'} target="_blank"> </Link>
      window.location.pathname = '/login' 
    ) 
    }
  }

  async function Addtofavourite() {
  await axios.post(
  `https://backend.slsog.com/api/courses/wishlist/add/${ID}`,
  null,
  { headers: { Authorization: "Bearer " + token } }
)  }

  async function handleDelete(id) {
    await axios.delete(
      `https://backend.slsog.com/api/courses/wishlist/remove/${id}`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
  }


    const [activeTab, setActiveTab] = useState('Description');
  
    const renderContent = () => {
      switch (activeTab) {
        case 'Description':
          return  <> 
           <div style={{textAlign: 'left'}}>
              <h6>
                {parse(Course?.description || "")}
              </h6>
            </div>
            </>
        case 'Location':
          return  <div> <FontAwesomeIcon icon={faLocationDot} /> {Course.location}</div>;
        case 'Duration':
          return  <div> <FontAwesomeIcon icon={faClock} /> {Course.time}</div>;
        case 'Price':
          return  <div> <FontAwesomeIcon icon={faUserCircle} /> {Course.instructor}</div>;
        default:
          return '';
      }
    }

  return (
    <>
      {loading ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
          <Showskelton height="400px" length="1" classes="col-12 p-5 mt-5 " />
        </div>
      ) : (
        <div className="py-md-5 p-4 mt-5 d-flex flex-wrap gap-md-4 center">
          <div className="mt-3 p-3 border rounded col-lg-10 col-12 ">
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
                <h2 className="col-12">{Course.name}</h2>
              </div>

              <div className="d-flex align-items-center col-lg-4 gap-2 ">
              <h2 className="m-0 text-danger">{Course.price}EGP</h2>
              {courses.find((item) => item.id == ID) ? (
                <button disabled className="btn btn-danger">
                  BOOKED
                </button>
              ) : (
                <Link
                  to={currentUser ? `/coursespayment/${Course.id}` : "/login"}
                  target="_blank"
                >
                  <button className="btn btn-danger ">BOOK NOW</button>
                </Link>
              )}
            </div>
            </div>
{/* 
            <div className="col-12 d-flex flex-wrap mt-3">
              <div className="col-lg-4 col-12 mb-3">
                <div>
                  <h5 style={{ color: "#8A8A9A" }}>
                    <FontAwesomeIcon icon={faUser} /> INSRTUCTOR{" "}
                  </h5>
                  <h5> {Course.instructor} </h5>
                </div>
              </div>

              <div className="col-lg-4 col-12 mb-3">
                <div>
                  <h5 style={{ color: "#8A8A9A" }}>
                    <FontAwesomeIcon icon={faLocationDot} /> LOCATION{" "}
                  </h5>
                  <h5> {Course.location} </h5>
                </div>
              </div>

              <div className="col-lg-4 col-12 mb-3">
                <div>
                  <h5 style={{ color: "#8A8A9A" }}>
                    <FontAwesomeIcon icon={faClock} /> TIME{" "}
                  </h5>
                  <h5> {Course.time} </h5>
                </div>
              </div> 
            </div>*/}



            <div style={{ position: "relative" }}>
              <img
                src={`http://backend.slsog.com${Course.image}`}
                style={{ objectFit: "cover" }}
                className="rounded col-12 mt-3"
                alt="img"
              />

              {isFav ? (
                <FontAwesomeIcon
                  onClick={() => {
                    Favourite();
                  }}
                  style={{
                    position: "absolute",
                    top: "45px",
                    right: "30px",
                    fontSize: "35px",
                    color: "white",
                    cursor: "pointer",
                  }}
                  icon={faHeart}
                />
              ) : (
                <FontAwesomeIcon
                  onClick={() => {
                    handleDelete(ID);
                    setIsFav(true);
                  }}
                  style={{
                    position: "absolute",
                    top: "45px",
                    right: "30px",
                    fontSize: "35px",
                    color: "red",
                    cursor: "pointer",
                  }}
                  icon={faHeart}
                />
              )}
            </div>

            {/* <div className="mt-4">
              <div className="d-flex align-items-center mb-1 gap-2">
                <h5 style={{ color: "#8A8A9A" }}>
                  <FontAwesomeIcon icon={faBook} /> COURSE FEATURES{" "}
                </h5>
              </div>
              <h6 style={{ marginTop: "" }}>
                {parse(Course?.description || "")}
              </h6>
            </div> */}


        <div className="component">
              <div className="tabs" style={{display: 'flex' , flexDirection: 'column'}}>
                <div className="d-flex gap-1" style={{justifyContent: 'space-between'}}>
                <p className={`divcource p-1 col-3 ${activeTab ===  'Description' && "active1" }`} onClick={() => setActiveTab('Description')}> DESCRIPTION</ p>
                <p className={`divcource p-1 col-3 ${activeTab ===  'Price' && "active1" }`} onClick={() => setActiveTab('Price')}> INSTRUCTOR</p >
                <p className={`divcource p-1 col-3 ${activeTab ===  'Location' && "active1" }`} onClick={() => setActiveTab('Location')}>LOCATION</p >
                <p className={`divcource p-1 col-3 ${activeTab ===  'Duration' && "active1" }`}  onClick={() => setActiveTab('Duration')}>TIME</p >
                </div>
                <div className="tab-content">{renderContent()}</div>

              </div>
            </div>

          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
