import { useEffect, useState } from "react";
import Tables from "../Table/Tables";
import axios from "axios";
import Cookie from "cookie-universal";

export default function Subcategeories() {
  // Table's Header in users page
  const UsersHeader = [
    { name: "ID", keyy: "id" },
    { name: "Subcategory", keyy: "title" },
    { name: "Category", keyy: "category" },
  ];

  const Title = "Subcategories Page";

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
      .get(`https://backend.slsog.com/api/sub-categories?page=${Page}&limit=${Limit}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((data) => {
        setusers(data.data.data);
        setTotal(data.data.total);
      })
      .finally(() => setloading(false))
      .catch((err) => err);
  }, [Limit, Page]);

  // Delete function
  async function handleDelete(id) {
    await axios.delete(`https://backend.slsog.com/api/sub-categories/${id}`, {
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
        Search="name"
        loading={loading}
      />
    </div>
  );
}
