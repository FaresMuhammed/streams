import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import Cookie from "cookie-universal";
import { Link, useParams } from "react-router-dom";
import Footer from "../HomePage/Footer/Footer";
import Loading from "../Loading/Loading";

export default function Adduser() {

  const { ID } = useParams();
  const [Course, setCourse] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://backend.slsog.com/api/courses/${ID}`)
      .then((data) => {
        setCourse(data.data);
      })

      .catch((err) => err);
  }, []);

  const cookie = Cookie();
  const token = cookie.get("eng");

  // Usestates
  const [Upadateform, setUpdateform] = useState({
    course_id: Course.id,
    first_name: "",
    last_name: "",
    phone_number: "",
    city: "",
    street: "",
    building: "",
    floor: "",
    apartment: "",
  });

  // Input function
  function Onchange(e) {
    setUpdateform({ ...Upadateform, [e.target.name]: e.target.value });
  }

  // Add function
  async function Handlesubmit(e) {
    setloading(true);
    e.preventDefault();
    const res = await axios.post(
      "https://backend.slsog.com/api/paymob/initiate-payment",
      {
        course_id: Course.id,
        first_name: Upadateform.first_name,
        last_name: Upadateform.last_name,
        phone_number: Upadateform.phone_number,
        city: Upadateform.city,
        street: Upadateform.street,
        building: Upadateform.building,
        floor: Upadateform.floor,
        apartment: Upadateform.apartment,
      },
      { headers: { Authorization: "Bearer " + token } }
    );
    setloading(false);
    window.location.replace(res.data.iframe_url);
    console.log(res);
  }

  console.log(loading);

  return (
    <>
      {loading && <Loading />}

      <Form onSubmit={Handlesubmit} className="bg-white w-100 mx-2 p-3 mt-5">
        <Form.Group className="mb-3 mt-5" controlId="formBasicNameee">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="first_name"
            value={Upadateform.first_name}
            onChange={Onchange}
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-4" controlId="formBasicNameee">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            name="last_name"
            value={Upadateform.last_name}
            onChange={Onchange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmailll">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your phone number"
            name="phone_number"
            value={Upadateform.phone_number}
            onChange={Onchange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone4">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your city"
            name="city"
            value={Upadateform.city}
            onChange={Onchange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCompany4">
          <Form.Label>Street</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your street"
            name="street"
            value={Upadateform.street}
            onChange={Onchange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPass">
          <Form.Label>Building</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your building"
            name="building"
            value={Upadateform.building}
            onChange={Onchange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassCon">
          <Form.Label>Floor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your floor"
            name="floor"
            value={Upadateform.floor}
            onChange={Onchange}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassCon">
          <Form.Label>Apartment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your apartment"
            name="apartment"
            value={Upadateform.apartment}
            onChange={Onchange}
          />
        </Form.Group>

        <div className="mb-4">
          <div className="d-flex align-items-start gap-2 flex-wrap">
            <img
              src={`http://backend.slsog.com${Course.image}`}
              height={"120px"}
              style={{ objectFit: "cover" }}
              className="rounded col-sm-3 col-12"
              alt="img"
            />
            <div className="col-sm-6 col-12">
              <h6>{Course.name}</h6>
              <p className="m-0 text-truncate mb-1">{Course.classification}</p>
              <div className=" align-items-center gap-3">
                <h5 className="m-0 text-primary mb-1">{Course.price}EGP</h5>
                <Link to={`/courses/${Course.id}`}>
                  <button className="btn btn-danger">Learn more</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <Button
            disabled={
              Upadateform.first_name.length > 1 &&
              Upadateform.last_name.length > 1 &&
              Upadateform.phone_number.length > 1 &&
              Upadateform.city.length > 1
                ? false
                : true
            }
            className="center"
            variant="primary"
            type="submit"
          >
            To payment
          </Button>
        </div>
      </Form>

      <Footer />
    </>
  );
}
