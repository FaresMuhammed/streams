import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Loading3 from "../Loading3/Loading3";
import axios from "axios";
import Cookie from "cookie-universal";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

export default function CAT1() {

  const cookie = Cookie();
  const token = cookie.get("eng");
  const Navigate = useNavigate()

  // Usestates
  const [Upadateform, setUpdateform] = useState({
    title: "",
  });
  const [Load, setLoad] = useState(false);
  const [Error, setError] = useState("");

  // Input function
  function Onchange(e) {
    setUpdateform({ ...Upadateform, [e.target.name]: e.target.value });
  }

  // Add function
  async function Handlesubmit(e) {
    setLoad(true);
    e.preventDefault();
    try{ await axios.post(
      "https://backend.slsog.com/api/categories",
      {
        title: Upadateform.title,
      },
      { headers: { Authorization: "Bearer " + token } }
    );
    setLoad(false);
    Navigate("/dashboard/categories")
  }catch (err) {
    setLoad(false);
    setError(err.response.data.message);
  }
  }

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

        {Error !== "" && (
          <div className="alert alert-danger" role="alert">
            {Error}
          </div>
        )}

        <Button
          disabled={Upadateform.title.length > 1 ? false : true}
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
