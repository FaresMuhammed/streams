import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Loading3 from "../Loading3/Loading3";
import axios from "axios";
import Cookie from "cookie-universal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CAT1() {
  const [value, setValue] = useState("");

  const cookie = Cookie();
  const token = cookie.get("eng");

  // Usestates
  const [Upadateform, setUpdateform] = useState({
    title: "",
  });
  const [Load, setLoad] = useState(false);

  // Input function
  function Onchange(e) {
    setUpdateform({ ...Upadateform, [e.target.name]: e.target.value });
  }

  // Add function
  async function Handlesubmit(e) {
    // setLoad(true)
    e.preventDefault();
    await axios.post(
      "http://backend.slsog.com/api/categories",
      {
        title: Upadateform.title
      },
      { headers: { Authorization: "Bearer " + token } }
    );
    setLoad(false);
    window.location.pathname = "/dashboard/categoery1";
  }

  console.log(Upadateform);

  return (
    <>
      {Load && <Loading3 />}

      <Form onSubmit={Handlesubmit} className="bg-white w-100 mx-2 p-3">
        <Form.Group className="mb-3" controlId="formBasicNameee">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={Upadateform.title}
            onChange={Onchange}
          />
        </Form.Group>

        <Button
          disabled={
            Upadateform.title.length > 1
              ? false
              : true
          }
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
