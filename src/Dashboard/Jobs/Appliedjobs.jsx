import { useEffect, useState } from "react";
import Tables from "../Table/Tables";
import axios from "axios";
import Cookie from "cookie-universal";

export default function Jobs() {
  // Table's Header in users page
  const UsersHeader = [
    { name: "ID", keyy: "id" },
    { name: "NAME", keyy: "full_name" },
    { name: "COUNTRY", keyy: "country" },
    { name: "EMAIL", keyy: "email" },
    { name: "PHONE", keyy: "phone" },
    { name: "CV", keyy: "cv" },
    { name: "CREATED", keyy: "created_at" },
    { name: "UPDATED", keyy: "updated_at" },
  ];

  const Title = "Job requests page";

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
      .get(
        `https://backend.slsog.com/api/job-requests?page=${Page}&limit=${Limit}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      // get(`/${USERS}?limit=${Limit}&page=${Page}`)
      .then((data) => {
        setusers(data.data.data);
        setTotal(data.data.total);
      })
      .finally(() => setloading(false))
      .catch((err) => err);
  }, [Limit, Page]);

  console.log(users);

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
        Title={Title}
        Search="name"
        loading={loading}
      />
    </div>
  );
}
