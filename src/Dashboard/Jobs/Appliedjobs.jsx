import { useEffect, useState } from "react";
import Tables from "../Table/Tables";
import axios from "axios";
import Cookie from "cookie-universal";

export default function Jobs() {
  // Table's Header in users page
  const UsersHeader = [
    // { name: "ID", keyy: "id" },
    { name: "NAME", keyy: "full_name" },
    { name: "COUNTRY", keyy: "country" },
    { name: "EMAIL", keyy: "email" },
    { name: "PHONE", keyy: "phone" },
    { name: "Job", keyy: "job" },
    { name: "CV", keyy: "cv" },
    { name: "Grade", keyy: "gpa" },
    { name: "Received at", keyy: "created_at" },
  ];

  const Title = "Job requests page";

  const [Jobrequests, setJobrequests] = useState([]);

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
      .then((data) => {
        setJobrequests(data.data.data);
        setTotal(data.data.total);
      })
      .finally(() => setloading(false))
      .catch((err) => err);
  }, [Limit, Page]);

  // Delete function
  async function handleDelete(id) {
    await axios.delete(`https://backend.slsog.com/api/job-requests/${id}`, {
      headers: { Authorization: "Bearer " + token },
    });
    setJobrequests((previous) => previous.filter((item) => item.id !== id));
  }

  return (
    <div className=" w-100 p-2 shadow-sm">
      <Tables
        Limit={Limit}
        setLimit={setLimit}
        Page={Page}
        ChoosedPage={setPage}
        Total={Total}
        Data={Jobrequests}
        Header={UsersHeader}
        Delete={handleDelete}
        Title={Title}
        Api="job-requests"
        Search="full_name"
        loading={loading}
      />
    </div>
  );
}
