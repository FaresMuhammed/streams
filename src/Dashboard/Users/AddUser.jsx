import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Loading3 from "../Loading3/Loading3";
import axios from "axios";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";

export default function Adduser() {

  const Navigate = useNavigate()
  const cookie = Cookie();
  const token = cookie.get("eng");

  // Usestates
  const [Upadateform, setUpdateform] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Company: "",
    Role: "",
    Password: "",
    PasswordConfirm: "",
  });
  const [Load, setLoad] = useState(false);
  const [Error, setError] = useState("");

  // Input function
  function Onchange(e) {
    setUpdateform({ ...Upadateform, [e.target.name]: e.target.value });
  }

  // Add function
  async function Handlesubmit(e) {
    setLoad(true)
    e.preventDefault();
    try{ await axios.post(
      "https://backend.slsog.com/api/users",
      {
        name: Upadateform.Name,
        email: Upadateform.Email,
        phone: Upadateform.Phone,
        company: Upadateform.Company,
        password: Upadateform.Password,
        password_confirmation: Upadateform.PasswordConfirm,
        role: Upadateform.Role,
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
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="Name"
            value={Upadateform.Name}
            onChange={Onchange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmailll">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="Email"
            value={Upadateform.Email}
            onChange={Onchange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone4">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter phone"
            name="Phone"
            value={Upadateform.Phone}
            onChange={Onchange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCompany4">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter company"
            name="Company"
            value={Upadateform.Company}
            onChange={Onchange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>Role</Form.Label>
          <Form.Select name="Role" value={Upadateform.Role} onChange={Onchange}>
            <option disabled value="">
              Select Role
            </option>
            <option value="1996">Admin</option>
            <option value="1997">User</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPass">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="Password"
            value={Upadateform.Password}
            onChange={Onchange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassCon">
          <Form.Label>Password confirmation</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="PasswordConfirm"
            value={Upadateform.PasswordConfirm}
            onChange={Onchange}
          />
        </Form.Group>

        {Error !== "" && (
          <div className="alert alert-danger" role="alert">
            {Error}
          </div>
        )}

        <Button
          disabled={
            Upadateform.Name.length > 1 &&
            Upadateform.Email.length > 1 &&
            Upadateform.Phone.length > 1 &&
            Upadateform.Password.length > 6
              ? false
              : true
          }
          className="center "
          variant="primary"
          type="submit"
        >
          Add
        </Button>
      </Form>
    </>
  );
}
