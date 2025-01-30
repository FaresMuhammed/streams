import { useEffect, useState } from "react";
import Tables from "../Table/Tables";
import axios from "axios";
import Cookie from "cookie-universal";

export default function Coursespage() {
  // Table's Header in users page
  const UsersHeader = [
    { name: "Classification", keyy: "classification" },
    { name: "Discipline", keyy: "discipline" },
    { name: "Name", keyy: "name" },
    { name: "Image", keyy: "image" },
    { name: "Description", keyy: "description" },
    { name: "Category", keyy: "category" },
    { name: "Subcategory", keyy: "sub_category" },
  ];

  const Title = "Courses Page";
  const [users, setusers] = useState([]);

  // Paginate
  const [Page, setPage] = useState(1);
  const [Limit, setLimit] = useState(10);
  const [Total, setTotal] = useState(0);

  const [loading, setloading] = useState(false);

  const cookie = Cookie();
  const token = cookie.get("eng");

  // Useeffect to get all jobs
  useEffect(() => {
    setloading(true);
    axios
      .get(`https://backend.slsog.com/api/courses?page=${Page}&limit=${Limit}`, {
        headers: { Authorization: "Bearer " + token },
      })
      // get(`/${USERS}?limit=${Limit}&page=${Page}`)
      .then((data) => {
        setusers(data.data.data);
        setTotal(data.data.total);
      })
      .finally(() => setloading(false))
      .catch((err) => err);
  }, [Limit, Page]);

  // Delete function
  async function handleDelete(id) {
    await axios.delete(`https://backend.slsog.com/api/courses/${id}`, {
      headers: { Authorization: "Bearer " + token },
    });
    setusers((previous) => previous.filter((item) => item.id !== id));
  }

  return (
    <div className=" w-100 p-2 shadow-sm">
      <Tables
        Limit={Limit}
        setLimit={setLimit}
        Page={Page}
        ChoosedPage={setPage}
        Total={Total}
        Data={users}
        Header={UsersHeader}
        Delete={handleDelete}
        Title={Title}
        Api="courses"
        Search="name"
        loading={loading}
      />
    </div>
  );
}
