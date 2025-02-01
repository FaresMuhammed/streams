import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Cookie from "cookie-universal";
import axios from "axios";
import Loading3 from "../Loading3/Loading3";

export default function Updatecat1() {
  const Nav = useNavigate();
  const { ID } = useParams();
  const [Title, seTitle] = useState("");
  const [Error, setError] = useState("");
  const [Load, setLoad] = useState(false);

  const cookie = Cookie();
  const token = cookie.get("eng");

  useEffect(() => {
    setLoad(true);
    axios
      .get(`https://backend.slsog.com/api/categories/${ID}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((data) => {
        seTitle(data.data.title);
        setLoad(false);
      });
  }, []);

  // Update function
  async function Handlesubmit(e) {
    setLoad(true);
    e.preventDefault();
    try {await axios.post(
      `https://backend.slsog.com/api/categories/${ID}`,
      { title: Title },
      { headers: { Authorization: "Bearer " + token } }
    );
    setLoad(false);
    Nav("/dashboard/categories")
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
            value={Title}
            onChange={(e) => seTitle(e.target.value)}
          />
        </Form.Group>

        {Error !== "" && (
          <div className="alert alert-danger" role="alert">
            {Error}
          </div>
        )}

        <Button
          disabled={Title.length > 1 ? false : true}
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
