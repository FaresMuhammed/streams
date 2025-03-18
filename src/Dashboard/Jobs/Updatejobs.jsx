import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
// import Loading from '......./Loading';
import { useNavigate, useParams } from "react-router-dom";
import Cookie from "cookie-universal";
import axios from "axios";
import Loading3 from "../Loading3/Loading3";
import ReactQuill from "react-quill";

export default function Updatejobs() {
  const Navigate = useNavigate()

  // To get id
  const { ID } = useParams();

  // Usestates for inputs
  const [Title, seTitle] = useState("");
  const [Categeory, setCategeory] = useState("");
  const [Description, setDescription] = useState("");
  const [Type, setType] = useState("");

  const [Load, setLoad] = useState(false);
  const [Error, setError] = useState('');

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
        setType(data.data.type);
        setLoad(false);
      });
  }, []);

  // Update function
  async function Handlesubmit(e) {
    setLoad(true);
    e.preventDefault();
    try{await axios.post(
      `https://backend.slsog.com/api/jobs/${ID}`,
      { title: Title, category: Categeory, description: Description , type: Type},
      { headers: { Authorization: "Bearer " + token } }
    );
    setLoad(false);
    Navigate("/dashboard/jobs")
  }catch (err) {
    setLoad(false);
    setError(err.response.data.message);
  }}

  return (
    <>
      {Load && <Loading3 />}

      <Form onSubmit={Handlesubmit} className="bg-white w-100 mx-2 p-3">
      
          <Form.Group className="mb-3" controlId="formBasicRole">
                  <Form.Label>Type</Form.Label>
                  <Form.Select
                    name="type"
                    value={Type}
                    onChange={(e) => setType(e.target.value)}
                    >
                    <option disabled value="">
                      Select job type
                    </option>
                      <option value='all'>All</option>
                      <option value='instructor'>Instructor</option>
                    </Form.Select>
                </Form.Group>
       
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
        {Error !== "" && (
          <div className="alert alert-danger mt-3" role="alert">
            {Error}
          </div>
        )}

        <Button
          disabled={
            Title.length > 1 && Categeory.length > 1 && Description !== ""
              ? false
              : true
          }
          className="d-flex mt-3"
          variant="primary"
          type="submit"
        >
          Update
        </Button>
      </Form>
    </>
  );
}
