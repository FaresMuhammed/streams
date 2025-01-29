import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
// import Loading from '......./Loading';
import { useNavigate, useParams } from "react-router-dom";
import Cookie from "cookie-universal";
import axios from "axios";
import Loading3 from "../Loading3/Loading3";
import ReactQuill from "react-quill";

export default function Updatejobs() {
  const Nav = useNavigate();

  // To get id
  const { ID } = useParams();

  // Usestates for inputs
  const [Title, seTitle] = useState("");
  const [Categeory, setCategeory] = useState("");
  const [Description, setDescription] = useState("");

  const [Load, setLoad] = useState(false);

  const cookie = Cookie();
  const token = cookie.get("eng");

  // To get user data and put it in the inputs
  useEffect(() => {
    setLoad(true);
    axios
      .get(`https://backend.slsog.com/api/jobs/${ID}`, {
        headers: { Authorization: "Bearer " + token },
      })

      .then((data) => {
        seTitle(data.data.title);
        setCategeory(data.data.category);
        setDescription(data.data.description);
        setLoad(false);
      });
    // .catch(() => Nav('/dashboard/users/page/404' , {replace: true})) // if there isn't user it will be error and go to error page and delete the last page
  }, []);

  // Update function
  async function Handlesubmit(e) {
    setLoad(true);
    e.preventDefault();
    await axios.post(
      `https://backend.slsog.com/api/jobs/${ID}`,
      { title: Title, category: Categeory, description: Description },
      { headers: { Authorization: "Bearer " + token } }
    );
    window.location.pathname = "/dashboard/jobs";
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
            value={Title}
            onChange={(e) => seTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmailll">
          <Form.Label>Categeory</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter categeory"
            value={Categeory}
            onChange={(e) => setCategeory(e.target.value)}
          />
        </Form.Group>

        <Form.Label>Description</Form.Label>
        <ReactQuill
          theme="snow"
          value={Description}
          onChange={setDescription}
        />

        <Button
          disabled={
            Title.length > 1 && Categeory.length > 1 && Description !== ""
              ? false
              : true
          }
          className="d-flex "
          variant="primary"
          type="submit"
        >
          Update
        </Button>
      </Form>
    </>
  );
}
