import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Cookie from "cookie-universal";
import axios from "axios";
import Loading3 from "../Loading3/Loading3";
import ReactQuill from "react-quill";

export default function Updatecourse() {
  const Nav = useNavigate();
  const [Load, setLoad] = useState(false);
  const [Error, setError] = useState("");
  const {ID} = useParams()

  const cookie = Cookie();
  const token = cookie.get("eng");

  const [Categeories, setCategeories] = useState([]);
  const [Subcategeories, setSubcategeories] = useState([]);

  const [discipline, setdiscipline] = useState("");
  const [classification, setclassification] = useState("");
  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [sub_category_id, setsub_category_id] = useState("");
  const [category_id, setcategory_id] = useState("");
  const [Price, setPrice] = useState("");

  // Getting categories
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

  // Getting subcategories
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
      subcat.category_id === Number(category_id) && (
        <option value={subcat.id}>{subcat.title}</option>
      )
  );

  useEffect(() => {
    setLoad(true);
    axios
      .get(`https://backend.slsog.com/api/courses/${ID}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((data) => {
        setdiscipline(data.data.discipline);
        setclassification(data.data.classification);
        setname(data.data.name);
        setimage(data.data.image);
        setdescription(data.data.description);
        setcategory_id(data.data.category_id);
        setsub_category_id(data.data.sub_category_id);
        setPrice(data.data.price);
        setLoad(false);
      });
  }, []);

  async function Handlesubmit(e) {
    e.preventDefault();
    setLoad(true);
    const formData = new FormData();
    formData.append("discipline", discipline);
    formData.append("classification", classification);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category_id", category_id);
    formData.append("sub_category_id", sub_category_id);
    formData.append("price", Price);
    if (typeof image === "object") {
      formData.append("image", image);
    }
    try {
      const res = await axios.post(
        `https://backend.slsog.com/api/courses/${ID}`,
        formData,
        { headers: { Authorization: "Bearer " + token } }
      );
      setLoad(false);
      Nav("/dashboard/courses")
    }catch (err) {
      setLoad(false);
      setError(err.response.data.message);
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
            value={category_id}
            onChange={(e) => setcategory_id(e.target.value)}
          >
            <option disabled value="">
              Select Category
            </option>
            {Show}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>Select Subcategory</Form.Label>
          <Form.Select
            name="sub_category_id"
            value={sub_category_id}
            onChange={(e) => setsub_category_id(e.target.value)}
          >
            <option disabled value="">
              Select Subcategory
            </option>
            {Show2}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameee">
          <Form.Label>Discipline</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={discipline}
            onChange={(e) => setdiscipline(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameee">
          <Form.Label>Classification</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={classification}
            onChange={(e) => setclassification(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameee">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image </Form.Label>
          <Form.Control
            id="image"
            type="file"
            onChange={(e) => setimage(e.target.value)}
            name="image"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameee">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Label>Description</Form.Label>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setdescription}
        />

        {Error !== "" && (
          <div className="alert alert-danger mt-3" role="alert">
            {Error}
          </div>
        )}

        <Button
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
