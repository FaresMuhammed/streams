import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Cookie from "cookie-universal";
import Footer from "../HomePage/Footer/Footer";
import Showskelton from "../Skelton/Skelton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faBook,
  faCamera,
  faPhone,
  faReceipt,
  faTrash,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import TransformDate from "../DateFunction/Date";
import { Link } from "react-router-dom";
import { Button, Form, Spinner } from "react-bootstrap";
import "./Profile.css";
import image from "../../IMAGES/depositphotos_639712656-stock-illustration-add-profile-picture-icon-vector.jpg";

export default function Profilepage() {
  const [currentUser, setcurrentUser] = useState("");
  const [Fav, setFav] = useState([]);
  const [Usercourses, setUsercourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [Id, setId] = useState("");
  const [Certificate, setCertificate] = useState([]);

  const cookie = new Cookie();
  const token = cookie.get("eng");

  const Openimages = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Fetch user
  const fetchUser = () => {
    axios
      .get("https://backend.slsog.com/api/user", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setcurrentUser(res.data);
        setId(res.data.id);
      })
      .finally(() => {
        setUploading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchUser();

    axios
      .get(`https://backend.slsog.com/api/users/wishlist`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((data) => {
        setFav(data.data.wishlist);
      });

    axios
      .get("https://backend.slsog.com/api/user/courses", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setUsercourses(res.data.courses))
      .finally(() => setLoading(false));
  }, []);

  // Handle image selection and upload
  async function Onchange(e) {
    const file = e.target.files[0];
    if (!file) return;

    setPreviewImage(URL.createObjectURL(file));
    setUploading(true);

    const formData = new FormData();
    formData.append("profile_image", file);

    try {
      await axios.post(
        `https://backend.slsog.com/api/users/${Id}/upload-image`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchUser();
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  }

  async function handleDeleteImage() {
    try {
      setUploading(true);
      await axios.delete(
        `https://backend.slsog.com/api/users/${Id}/delete-image`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      fetchUser();
      setPreviewImage("");
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  }

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
  ));

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
  ));

  return (
    <>
      {loading ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
          <Showskelton height="400px" length="1" classes="col-12 p-5 mt-5 " />
        </div>
      ) : (
        <div className="col-12 mt-5 p-3 bodyy">
          <div className="col-12 col-lg-4 mt-5 p-4">
            <div
              className="center rounded mb-2"
              style={{ flexDirection: "column", backgroundColor: "white" }}
            >
              <div className="col-7">
                {uploading ? (
                  <div
                    className="center"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      backgroundColor: "#f1f1f1",
                    }}
                  >
                    <Spinner animation="border" />
                  </div>
                ) : !currentUser?.profile_image  ? (
                  <Form.Group
                    className="center mb-3"
                    style={{
                      objectFit: "cover",
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      backgroundColor: "#F8F9FA",
                    }}
                  >
                    <Form.Control
                      hidden
                      ref={Openimages}
                      id="profile_image"
                      type="file"
                      onChange={Onchange}
                      name="profile_image"
                    />
                    <div
                      onClick={() => Openimages.current.click()}
                      className="center"
                      style={{ flexDirection: "column", cursor: "pointer" }}
                    >
                      <img
                        src={previewImage || image}
                        alt="Default"
                        style={{
                          objectFit: "cover",
                          width: "150px",
                          height: "150px",
                        }}
                      />
                      <FontAwesomeIcon
                        icon={faCamera}
                        style={{
                          position: "absolute",
                          fontSize: "16px",
                          bottom: "12px",
                          right: "12px",
                          backgroundColor: "#eaeaea",
                          borderRadius: "50%",
                          padding: "8px",
                        }}
                      />
                    </div>
                  </Form.Group>
                ) : (
                  <div
                    style={{
                      position: "relative",
                      width: "150px",
                      height: "150px",
                    }}
                    className="center"
                  >
                    <img
                      src={`https://backend.slsog.com/storage/${currentUser.profile_image}`}
                      className="mb-3 mt-4"
                      style={{
                        objectFit: "cover",
                        width: "140px",
                        height: "140px",
                        borderRadius: "50%",
    
                      }}
                      alt="Profile"
                      onClick={() => Openimages.current.click()}
                    />
                    <Form.Control
                      hidden
                      ref={Openimages}
                      id="profile_image"
                      type="file"
                      onChange={Onchange}
                      name="profile_image"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={handleDeleteImage}
                      style={{
                        position: "absolute",
                        bottom: "12px",
                        right: "12px",
                        cursor: "pointer",
                        backgroundColor: "#eaeaea",
                        borderRadius: "50%",
                        padding: "8px",
                        fontSize: "16px",
                      }}
                      title="Delete image"
                    />
                  </div>
                )}

                <h4 style={{ color: "grey" }}>{currentUser?.name}</h4>
              </div>
            </div>

            <div className="col-12 center mb-2">
              <div className="col-4 m-.5">
                <div
                  className="center col-11 rounded"
                  style={{ flexDirection: "column", backgroundColor: "white" }}
                >
                  <FontAwesomeIcon
                    color="blue"
                    className="mt-3 mb-3"
                    style={{
                      backgroundColor: "#E5ECFD",
                      padding: "10px",
                      borderRadius: "50%",
                      fontSize: "25px",
                    }}
                    icon={faBook}
                  />
                  <p>6</p>
                  <h6 style={{ color: "#667791" }}>Courses</h6>
                </div>
              </div>

              <div className="col-4 m-.5" style={{ backgroundColor: "" }}>
                <div
                  className="center col-11 rounded"
                  style={{ flexDirection: "column", backgroundColor: "white" }}
                >
                  <FontAwesomeIcon
                    color="green"
                    className="mt-3 mb-3"
                    style={{
                      backgroundColor: "#E6F5EC",
                      padding: "10px",
                      borderRadius: "50%",
                      fontSize: "25px",
                    }}
                    icon={faReceipt}
                  />
                  <p>6</p>
                  <h6 style={{ color: "#667791" }}>Certificates</h6>
                </div>
              </div>
              <div className="col-4 m-.5" style={{ backgroundColor: "" }}>
                <div
                  className="center col-12 rounded"
                  style={{ flexDirection: "column", backgroundColor: "white" }}
                >
                  <FontAwesomeIcon
                    color="#FC7A1E"
                    className="mt-3 mb-3"
                    style={{
                      backgroundColor: "#FFF1E8",
                      padding: "10px",
                      borderRadius: "50%",
                      fontSize: "25px",
                    }}
                    icon={faPhone}
                  />
                  <p>{currentUser.phone}</p>
                  <h6 style={{ color: "#667791" }}>Phone</h6>
                </div>
              </div>
            </div>
            <div className="col-12">
              <Link to={`/update/${currentUser.id}`}>
                <button className="btn btn-primary col-12">Settings</button>
              </Link>
            </div>
          </div>

          <div
            className="col-8 mt-5 rounded"
            style={{ backgroundColor: "white" }}
          ></div>
        </div>
        //   <div className="py-md-5 p-3 mt-5 d-flex flex-wrap center">
        //     <div className="mt-4 p-3 border rounded col-lg-10 col-12 ">
        //       <div className="center">
        //         <h2 className="mb-4 center fw-bold" style={{ color: ''}}>
        //           <FontAwesomeIcon
        //             style={{ paddingRight: "5px" ,  fontSize: '40px'}}
        //             icon={faUserCircle}
        //           />
        //           YOUR INFORMATIONS
        //         </h2>
        //       </div>

        //      <div className="d-flex flex-wrap">

        //                     <div className="col-12 d-flex flex-wrap mt-3">
        //                       <div className="col-lg-4 col-md-6 col-12 mb-3">
        //                         <div>
        //                           <h5 style={{ color: "#8A8A9A" }}>
        //                             NAME
        //                           </h5>
        //                           <h5> {currentUser.name} </h5>
        //                         </div>
        //                       </div>

        //                       <div className="col-lg-4 col-md-6 col-12 mb-3">
        //                         <div>
        //                           <h5 style={{ color: "#8A8A9A" }}>EMAIL</h5>
        //                           <h5> {currentUser.email} </h5>
        //                         </div>
        //                       </div>

        //                       <div className="col-lg-4 col-md-6 col-12 mb-3">
        //                         <div>
        //                          <h5 style={{ color: "#8A8A9A" }}>PHONE</h5>
        //                           <h5> {currentUser.phone} </h5>
        //                         </div>
        //                       </div>

        //                       <div className="col-lg-4 col-md-6 col-12 mb-3">
        //                         <div>
        //                         <h5 style={{ color: "#8A8A9A" }}>COMPANY</h5>
        //                         <h5> {currentUser.company !== null ? currentUser.company : 'none'}</h5>
        //                         </div>
        //                       </div>

        //                       <div className="col-lg-4 col-md-6 col-12 mb-3">
        //                         <div>
        //                         <h5 style={{ color: "#8A8A9A" }}>JOINED AT</h5>
        //                         <h5>{TransformDate(currentUser.created_at)}</h5>
        //                         </div>
        //                       </div>

        //                       <div className="col-lg-4 col-md-6 col-12 mb-3">
        //                         <div>
        //                         <h5 style={{ color: "#8A8A9A" }}>UPDATED AT</h5>
        //                         <h5>{TransformDate(currentUser.updated_at)}</h5>
        //                         </div>
        //                       </div>

        //                     </div>

        //        <div className="col-12">
        //         <div className="col-12 gap-2 mb-2 d-flex">
        //           <h5 className="mb-3" style={{ color: "#8A8A9A" }}>FAVOURITS:</h5>
        //           <h5>{Fav[0] == undefined && 'none'}</h5>
        //         </div>
        //         {Fav[0] !== undefined && (Showfav)}
        //        </div>

        //        <div className="col-12">
        //         <div className="col-12 gap-2 mb-2 d-flex">
        //           <h5 className="mb-3" style={{ color: "#8A8A9A" }}>COURSES:</h5>
        //           <h5>{Usercourses[0] == undefined && 'none'}</h5>
        //         </div>
        //         {Usercourses[0] !== undefined && (Showcourses)}
        //        </div>

        //     </div>
        //       <Link to={`/update/${currentUser.id}`}>
        //         <Button className="btn">Update</Button>
        //       </Link>
        //     </div>
        //   </div>
      )}
      <Footer />
    </>
  );
}
