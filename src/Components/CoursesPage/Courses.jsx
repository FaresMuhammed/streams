import "./Courses.css";
import Footer from "../HomePage/Footer/Footer";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useRef, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Showskelton from "../Skelton/Skelton";

export default function Courses() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [loading, setloading] = useState(true);
  const [loading2, setloading2] = useState(true);
  const [Categeories, setCategeories] = useState([]);
  const [Subcategeories, setSubcategeories] = useState([]);
  const [UpdateubCategories, setUpdateubCategories] = useState([]);
  const [Courses, setCourses] = useState([]);
  const [Updatecourses, setUpdatecourses] = useState([]);

  const [id, setId] = useState("");

  const ref = useRef(null);

  // getting categories

  useEffect(() => {
    axios
      .get(`https://backend.slsog.com/api/categories`)
      .then((data) => {
        setCategeories(data.data);
        if (data.data.length > 0) {
          const firstCategoryId = data.data[0].id;
          setId(firstCategoryId);
          Showsubcategories(firstCategoryId); // Update subcategories
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setloading(false);
      });
  }, []);

  useEffect(() => {
    if (Subcategeories.length > 0) {
      const firstSubCategory = Subcategeories.filter(
        (sub) => sub.category_id == id
      );

      setUpdateubCategories(firstSubCategory);
    }
  }, [Subcategeories, id]);

  // getting subcategories
  useEffect(() => {
    axios
      .get(`https://backend.slsog.com/api/sub-categories`)
      .then((data) => {
        setSubcategeories(data.data);
      })
      .catch((err) => err);
  }, []);

  // getting courses
  useEffect(() => {
    axios
      .get(`https://backend.slsog.com/api/courses`)
      .then((data) => {
        setCourses(data.data);
      })
      .finally(() => setloading2(false))
      .catch((err) => err);
  }, []);

  // showing categories
  // <div className="center col-8">

  const Show = Categeories.map((cat , key) => (

    <button
      ref={ref}
      onClick={() => Showsubcategories(cat.id)}
      className={` cat center mb-2 p-1 ${
        id === cat.id && "acctive"
      }`}
    >
    {cat.title}
    </button>
  ));
  // </div>


  // showing subcategories
  const Showsubcategories = (id) => {
    setId(id);
    const filterJob = Subcategeories?.filter((item) => item.category_id == id);
    setUpdateubCategories(filterJob);
  };

  const Show2 = UpdateubCategories.map((subcat) => (
    <button
      onClick={() => handleShow(subcat.id)}
      className="btn btn-danger m-1 rounded col-sm-5 col-md-3 col-lg-2 col-11 center mb-2 py-1"
    >
      {subcat.title}
    </button>
  ));

  // showing courses
  const handleShow = (id) => {
    setShow(true);
    const filterCourses = Courses?.filter((item) => item.sub_category_id == id);
    setUpdatecourses(filterCourses);
  };

  const Show3 = Updatecourses.map((course) => (
    <div className="mb-4">
      <div className="d-flex align-items-start gap-2 flex-wrap">
        <img
          src={`http://backend.slsog.com${course.image}`}
          height={"120px"}
          style={{ objectFit: "cover" }}
          className="rounded col-sm-3 col-12"
          alt="img"
        />
        <div className="col-sm-6 col-12">
          <h6>{course.name}</h6>
          <p className="m-0 text-truncate mb-1">{course.classification}</p>
          <div className=" align-items-center gap-3">
            <h5 className="m-0 text-primary mb-1">{course.price}EGP</h5>
            <Link to={`/courses/${course.id}`}>
              <button className="btn btn-danger">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
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
            style={{ zIndex: "5", opacity: "0.3", height: "105%" }}
          ></div>

          <div className=" d-flex flex-wrap mt-5" style={{ zIndex: "10" }}>
            <div className="col-lg-6 col-12 p-lg-5  mt-5">
              <h1 className="mb-lg-5 mb-3" style={{ fontSize: "35px" }}>
                Training Services
              </h1>
              <p className="mb-lg-5 mb-3">
                At Streamlines, we deliver expert training services designed to
                advance skills and knowledge across a wide range of industries.
                Serving both local and international clients—including leading
                companies like Khalda, Agiba, GUPCO, Rashpetco, Bapetco, ADNOC,
                and the Ministry of Energy and Mining in Sudan—our courses
                encompass all upstream disciplines, IT, machine learning,
                digital transformation, finance, economics, and more. Our
                training programs are tailored to meet the unique needs of each
                client, empowering professionals to excel and drive
                success in their fields.
              </p>
            </div>
          </div>
        </div>

        <div className="py-5">
          <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
            <h2 className="p-2" style={{ border: "2px solid black" }}>
              ON SITE COURSES
            </h2>
          </div>
          <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
            {loading ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
                <Showskelton height="40px" width="100px" length="3" />
              </div>
            ) : (
              <div className="center gap-2 flex-wrap">

              {Show}
              </div>

            )}
          </div>

          <div
            className="d-flex justify-content-center flex-wrap mb-5 "
            style={{ lineBreak: "anywhere" }}
          >
            {Show2}
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
            {loading2 ? (
              <div>
                <Showskelton height="80px" length="3" />
              </div>
            ) : (
              Show3
            )}
          </Modal.Body>
        </Modal>

        <Footer />
      </div>
    </>
  );
}
