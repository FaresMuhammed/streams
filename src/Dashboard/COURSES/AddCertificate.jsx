import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Loading3 from "../Loading3/Loading3";
import axios from "axios";
import Cookie from "cookie-universal";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

export default function AddCertificate() {
  const cookie = Cookie();
  const token = cookie.get("eng");
  const Navigate = useNavigate()
  const [Error, setError] = useState("")
  const [users, setusers] = useState([]);
  const [Courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`https://backend.slsog.com/api/users`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((data) => {
        setusers(data.data);
      })
      .catch((err) => err);
  }, []);
  console.log(users);

  useEffect(() => {
    axios
      .get(`https://backend.slsog.com/api/courses`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((data) => {
        setCourses(data.data);
      })
      .catch((err) => err);
  }, []);
  console.log(Courses);

  const [Upadateform, setUpdateform] = useState({
    user_id: "",
    course_id: "",
    certificate: "",
  });
  const [Load, setLoad] = useState(false);

  // Input function
  function Onchange(e) {
    setUpdateform({
      ...Upadateform,
      [e.target.name]:
        e.target.name === "certificate" ? e.target.files[0] : e.target.value,
    });
  }

  async function Handlesubmit(e) {
    e.preventDefault();
    setLoad(true);
    const formData = new FormData();
    formData.append("course_id", Upadateform.course_id);
    formData.append("user_id", Upadateform.user_id);
    formData.append("certificate", Upadateform.certificate);
    try {
      const res = await axios.post(
        "https://backend.slsog.com/api/certificates",
        formData,
        { headers: { Authorization: "Bearer " + token } }
      );
      setLoad(false);
      Navigate("/dashboard/certificates")
    }catch (err) {
      setLoad(false);
      setError(err.response.data.message);
    }
  }

  const Show1 = users.map((user) => (
    <option value={user.id}>{user.name}</option>
  ));

  const Show2 = Courses.map((course) => (
    <option value={course.id}>{course.classification}</option>
  ));

  
  return (
    <>
      {Load && <Loading3 />}

      <Form onSubmit={Handlesubmit} className="bg-white w-100 mx-2 p-3">
        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>Select user</Form.Label>
          <Form.Select
            name="user_id"
            value={Upadateform.user_id}
            onChange={Onchange}
          >
            <option disabled value="">
              Select user
            </option>
            {Show1}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>Select course</Form.Label>
          <Form.Select
            name="course_id"
            value={Upadateform.course_id}
            onChange={Onchange}
          >
            <option disabled value="">
              Select course
            </option>
            {Show2}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Certificate </Form.Label>
          <Form.Control
            id="image"
            type="file"
            onChange={Onchange}
            name="certificate"
            required
          />
        </Form.Group>

        {Error !== "" && (
          <div className="alert alert-danger" role="alert">
            {Error}
          </div>
        )}

        <Button
          className="center mt-3"
          variant="primary"
          type="submit"
        >
          Add
        </Button>
      </Form>
    </>
  );
}
