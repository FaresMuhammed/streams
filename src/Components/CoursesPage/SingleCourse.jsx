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
                <h2 className="col-12">{Course.name}</h2>
              </div>
              <div className="d-flex align-items-center col-lg-4 col-12  gap-2 ">
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

            <div className="d-flex flex-wrap gap-5 center">
              <h6 className="col-12">{parse(Course?.description || "")}</h6>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
