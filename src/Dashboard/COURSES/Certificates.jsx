import { useEffect, useState } from "react";
import Tables from "../Table/Tables";
import axios from "axios";
import Cookie from "cookie-universal";

export default function Certificates() {
  const UsersHeader = [
    { name: "User", keyy: "user" },
    { name: "Course", keyy: "course" },
    { name: "Certificate", keyy: "certificate" },

  ];

  const Title = "Certificates Page";

  const [Data, setData] = useState([]);

  // Paginate
  const [Page, setPage] = useState(1);
  const [Limit, setLimit] = useState(10);
  const [Total, setTotal] = useState(0);

  const [loading, setloading] = useState(false);

  const cookie = Cookie();
  const token = cookie.get("eng");

  useEffect(() => {
    setloading(true);
    axios
      .get(`https://backend.slsog.com/api/certificates?page=${Page}&limit=${Limit}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((data) => {
        setData(data.data.data);
        setTotal(data.data.total);
      })
      .finally(() => setloading(false))
      .catch((err) => err);
  }, [Limit, Page]);

  // Delete function
  async function handleDelete(id) {
    await axios.delete(`https://backend.slsog.com/api/certificates/${id}`, {
      headers: { Authorization: "Bearer " + token },
    });
    setData((previous) => previous.filter((item) => item.id !== id));
  }

  return (
    <div className=" w-100 p-2 shadow-sm">
      <Tables
        Limit={Limit}
        setLimit={setLimit}
        Page={Page}
        ChoosedPage={setPage}
        Total={Total}
        Data={Data}
        Header={UsersHeader}
        Delete={handleDelete}
        Title={Title}
        Api="certificates"
        Search="user_id"
        loading={loading}
      />
    </div>
  );
}
