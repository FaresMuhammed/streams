import { useEffect, useState } from "react";
import Tables from "../Table/Tables";
import axios from "axios";
import Cookie from "cookie-universal";

export default function Transactions() {
  // Table's Header in users page
  const TransactionsHeader = [
    { name: "Name", keyy: "first_name" },
    { name: "Email", keyy: "email" },
    { name: "Phone", keyy: "phone_number" },
    { name: "Success", keyy: "success" },
    { name: "Amount(EGP)", keyy: "amount_cents" },
    { name: "Received at", keyy: "created_at" },
  ];

  const Title = "Payments page";

  const [Payments, setPayments] = useState([]);

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
        `https://backend.slsog.com/api/paymob/transactions`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((data) => {
        setPayments(data.data);
        setTotal(data.data.total);
      })
      .finally(() => setloading(false))
      .catch((err) => err);
  }, [Limit, Page]);

  return (
    <div className=" w-100 p-2 shadow-sm">
      <Tables
        Limit={Limit}
        setLimit={setLimit}
        Page={Page}
        ChoosedPage={setPage}
        Total={Total}
        Data={Payments}
        Header={TransactionsHeader}
        Title={Title}
        loading={loading}
      />
    </div>
  );
}
