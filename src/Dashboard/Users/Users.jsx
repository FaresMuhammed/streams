import { useEffect, useState } from "react";
import Tables from "../Table/Tables";
import axios from "axios";
import Cookie from "cookie-universal";

export default function Users() {
  // Table's Header in users page
  const UsersHeader = [
    { name: "User name", keyy: "name" },
    { name: "Email", keyy: "email" },
    { name: "Phone", keyy: "phone" },
    { name: "Company", keyy: "company" },
    { name: "Role", keyy: "role" },
    // { name: "Created at", keyy: "created_at" },
    // { name: "Last Login", keyy: "updated_at" },
  ];

  const Title = "Users Page";

  // Table's data in users page
  const [users, setusers] = useState([]);

  // Paginate
  const [Page, setPage] = useState(1);
  const [Limit, setLimit] = useState(10);
  const [Total, setTotal] = useState(0);

  const [loading, setloading] = useState(false);

  const cookie = Cookie();
  const token = cookie.get("eng");

  // Useeffect to get all users
  useEffect(() => {
    setloading(true);
    axios
      .get(`https://backend.slsog.com/api/users?page=${Page}&limit=${Limit}`, {
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
    await axios.delete(`https://backend.slsog.com/api/users/${id}`, {
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
        Api="users"
        Search="email"
        loading={loading}
      />
    </div>
  );
}
