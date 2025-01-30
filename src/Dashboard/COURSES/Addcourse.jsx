import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Loading3 from "../Loading3/Loading3";
import axios from "axios";
import Cookie from "cookie-universal";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

export default function AddCourse() {
  const cookie = Cookie();
  const token = cookie.get("eng");

  const [Categeories, setCategeories] = useState([]);
  const [Subcategeories, setSubcategeories] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    axios
      .get(`https://backend.slsog.com/api/categories`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((data) => {
        setCategeories(data.data);
      })
      .catch((err) => err);
  }, []);

  const Show = Categeories.map((cat) => (
    <option value={cat.id}>{cat.title}</option>
  ));

  useEffect(() => {
    axios
      .get(`https://backend.slsog.com/api/sub-categories`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((data) => {
        setSubcategeories(data.data);
      })
      .catch((err) => err);
  }, []);

  const Show2 = Subcategeories.map(
    (subcat) =>
      subcat.category_id === Number(id) && (
        <option value={subcat.id}>{subcat.title}</option>
      )
  );

  const [Upadateform, setUpdateform] = useState({
    discipline: "",
    classification: "",
    name: "",
    description: "",
    category_id: "",
    sub_category_id: "",
    image: "",
    price:""
  });
  const [Load, setLoad] = useState(false);

  // Input function
  function Onchange(e) {
    setUpdateform({
      ...Upadateform,
      [e.target.name]:
        e.target.name === "image" ? e.target.files[0] : e.target.value,
    });
  }

  async function Handlesubmit(e) {
    e.preventDefault();
    setLoad(true);
    const formData = new FormData();
    formData.append("discipline", Upadateform.discipline);
    formData.append("classification", Upadateform.classification);
    formData.append("name", Upadateform.name);
    formData.append("description", Upadateform.description);
    formData.append("category_id", Upadateform.category_id);
    formData.append("sub_category_id", Upadateform.sub_category_id);
    formData.append("image", Upadateform.image);
    formData.append("price", Upadateform.price);


    try {
      const res = await axios.post(
        "https://backend.slsog.com/api/courses",
        formData,
        { headers: { Authorization: "Bearer " + token } }
      );
      setLoad(false);
      window.location.pathname = "/dashboard/courses";
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {Load && <Loading3 />}

      <Form onSubmit={Handlesubmit} className="bg-white w-100 mx-2 p-3">
        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>Select category</Form.Label>
          <Form.Select
            name="category_id"
            value={Upadateform.category_id}
            onChange={(e) => {
              Onchange(e);
              setId(e.target.value);
            }}
          >
            <option disabled value="">
              Select category
            </option>
            {Show}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>Select subcategory</Form.Label>
          <Form.Select
            name="sub_category_id"
            value={Upadateform.sub_category_id}
            onChange={Onchange}
          >
            <option disabled value="">
              Select subcategory
            </option>
            {Show2}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameee">
          <Form.Label>Discipline</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter discipline"
            name="discipline"
            value={Upadateform.discipline}
            onChange={Onchange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameee">
          <Form.Label>Classification</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter classification"
            name="classification"
            value={Upadateform.classification}
            onChange={Onchange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameee">
          <Form.Label>Course name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course name"
            name="name"
            value={Upadateform.name}
            onChange={Onchange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameee">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            name="price"
            value={Upadateform.price}
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



        <Form.Group className="mb-3">
          <Form.Label>Image </Form.Label>
          <Form.Control
            id="image"
            type="file"
            onChange={Onchange}
            name="image"
            required
          />
        </Form.Group>

        <Button
          disabled={
            Upadateform.name.length > 1 &&
            Upadateform.discipline.length > 1 &&
            Upadateform.description.length > 1 &&
            Upadateform.classification.length > 1
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
