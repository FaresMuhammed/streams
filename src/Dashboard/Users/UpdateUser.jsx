import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
// import Loading from '......./Loading';
import { useNavigate, useParams } from "react-router-dom";
import Cookie from "cookie-universal";
import axios from "axios";
import Loading3 from "../Loading3/Loading3";

export default function Updateuser() {
  const Navigate = useNavigate()

  // To get id
  const { ID } = useParams();

  // Usestates for inputs
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Company, setCompany] = useState("");
  const [Role, setRole] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordConfrim, setPasswordConfrim] = useState("");
  // const [Id , setId] = useState('')

  const [Load, setLoad] = useState(false);
  const [Error, setError] = useState("");

  const cookie = Cookie();
  const token = cookie.get("eng");

  // To get user data and put it in the inputs
  useEffect(() => {
    setLoad(true);
    axios
      .get(`https://backend.slsog.com/api/users/${ID}`, {
        headers: { Authorization: "Bearer " + token },
      })

      .then((data) => {
        setName(data.data.name);
        setEmail(data.data.email);
        setPhone(data.data.phone);
        setCompany(data.data.company);
        setLoad(false);
      });
  }, []);

  // Update function
  async function Handlesubmit(e) {
    setLoad(true);
    e.preventDefault();
    try{await axios.post(
      `https://backend.slsog.com/api/users/${ID}`,
      {
        name: Name,
        email: Email,
        role: Role,
        phone: Phone,
        company: Company,
        password: Password,
        password_confirmation: PasswordConfrim,
      },
      { headers: { Authorization: "Bearer " + token } }
    )
    setLoad(false)
    Navigate("/dashboard/users")
    } 
    catch (err) {
      setLoad(false);
      setError(err.response.data.message);
    }
  }

  return (
    <>
      {Load && <Loading3 />}

      <Form onSubmit={Handlesubmit} className="bg-white w-100 mx-2 p-3">
        <Form.Group className="mb-3" controlId="formBasicNameee">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmailll">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number"
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCompany">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter company"
            value={Company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>Role</Form.Label>
          <Form.Select value={Role} onChange={(e) => setRole(e.target.value)}>
            <option disabled value="">
              Select Role
            </option>
            <option value="1997">User</option>
            <option value="1996">Admin</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmpassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Confirm password"
            value={PasswordConfrim}
            onChange={(e) => setPasswordConfrim(e.target.value)}
          />
        </Form.Group>


        {Error !== "" && (
          <div className="alert alert-danger" role="alert">
            {Error}
          </div>
        )}

        <Button
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