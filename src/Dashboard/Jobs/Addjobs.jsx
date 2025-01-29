import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Loading3 from "../Loading3/Loading3";
import axios from "axios";
import Cookie from "cookie-universal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Addjob() {
  const [value, setValue] = useState("");

  const cookie = Cookie();
  const token = cookie.get("eng");

  // Usestates
  const [Upadateform, setUpdateform] = useState({
    title: "",
    category: "",
    description: "",
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
      "http://backend.slsog.com/api/jobs",
      {
        title: Upadateform.title,
        category: Upadateform.category,
        description: Upadateform.description,
      },
      { headers: { Authorization: "Bearer " + token } }
    );
    setLoad(false);
    window.location.pathname = "/dashboard/jobs";
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

        <Form.Group className="mb-3" controlId="formBasicEmailll">
          <Form.Label>Categoery</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter categoery"
            name="category"
            value={Upadateform.category}
            onChange={Onchange}
          />
        </Form.Group>

        <Form.Label>Description</Form.Label>
        <ReactQuill
          theme="snow"
          value={Upadateform.description}
          onChange={(value) =>
            setUpdateform({ ...Upadateform, description: value })
          }
        />

        <Button
          disabled={
            Upadateform.title.length > 1 &&
            Upadateform.category.length > 1 &&
            Upadateform.description.length > 1
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
