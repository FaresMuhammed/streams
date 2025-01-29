import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Cookie from "cookie-universal";
import axios from "axios";
import Loading3 from "../Loading3/Loading3";

export default function Updatecat1() {
  const Nav = useNavigate();

  // To get id
  const { ID } = useParams();

  // Usestates for inputs
  const [Title, seTitle] = useState("");

  const [Load, setLoad] = useState(false);

  const cookie = Cookie();
  const token = cookie.get("eng");

  // To get user data and put it in the inputs
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
    // .catch(() => Nav('/dashboard/users/page/404' , {replace: true})) // if there isn't user it will be error and go to error page and delete the last page
  }, []);

  // Update function
  async function Handlesubmit(e) {
    setLoad(true);
    e.preventDefault();
    await axios.post(
      `https://backend.slsog.com/api/categories/${ID}`,
      { title: Title },
      { headers: { Authorization: "Bearer " + token } }
    );
    window.location.pathname = "/dashboard/categoery1";
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
