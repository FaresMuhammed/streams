// import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import PaginatedItems from "./Pagination/Pagination";
import { useEffect, useState } from "react";
import TransformDate from "../../Components/DateFunction/Date";
import axios from "axios";
import Cookie from "cookie-universal";

export default function Tables(props) {
  // Props in one page or more , Default value(props not in all pages)
  const Currentuser = props.currentUser || { name: "" };
  const dataSent = props.dataSent;

  const cookie = Cookie();
  const token = cookie.get("eng");

  // Search
  const [Search, setSearch] = useState("");
  const [SearchResult, setSearchResult] = useState("");
  const [Searching, setSearchig] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [gpa, setGpa] = useState("");
  const [job, setJob] = useState("");
  async function Getsearch() {
    try {
      const res = await axios.post(
        `https://backend.slsog.com/api/${props.Api}/search?${
          props.Search
        }=${Search}&job_title=${job}${gpa.length > 0 ? "&gpa=" + gpa : ""} `,
        null,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      setSearchResult(res.data);
    } catch (err) {
      // result after search
      console.log(err);
    } finally {
      setSearchig(false);
    }
  }

  useEffect(() => {
    const Debounce = setTimeout(() => {
      // to dellay the search (serch after stop writing)
      Getsearch(); // search fun runs here only
    }, 500);

    return () => clearTimeout(Debounce);
  }, [Search, gpa, job]);

  useEffect(() => {
    if (window.location.pathname === "/dashboard/job/jobrequests") {
      axios
        .get(`https://backend.slsog.com/api/jobs`, {
          headers: { Authorization: "Bearer " + token },
        })

        .then((data) => {
          setJobs(data?.data);
        })
        .catch((err) => console.log(err));
    }
  }, [window.location.pathname]);

  const showJobs = jobs?.map((item, key) => (
    <option key={key}>{item?.title}</option>
  ));

  const FilteredData =
    Search.length > 0 || gpa !== "" || job !== "" ? SearchResult : props.Data;
  // Table's header
  const ShowHeader = props.Header.map((item) => <th>{item.name}</th>);

  // Table's body
  const ShowData = FilteredData.map((item, key) => (
    <tr key={key}>
      {/* <td>{item.id}</td> */}
      {props.Header.map(
        (
          item2,
          key2 // map in map(map on header to get $users's object value from $UsersHeader)  ,,  // item2.keyy have the value
        ) => (
          <td key={key2}>
            {item2.keyy === "cv" ? (
              // item[item2.keyy]?.match(/\.(jpeg|jpg|gif|png)$/) !== null ? (
              //   <img
              //     width="80px"
              //     src={`http://backend.slsog.com${item[item2.keyy]}`}
              //     alt="CV"
              //   />
              // ) : (
              <a
                href={`http://backend.slsog.com${item[item2.keyy]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            ) : // )
            item2.keyy === "image" ? (
              <img
                width="80px"
                src={`http://backend.slsog.com${item[item2.keyy]}`}
              />
            ):
            item2.keyy === "certificate" ? (
              <img
                width="80px"
                src={`http://backend.slsog.com${item[item2.keyy]}`}
              /> 
            ): item2.keyy === "created_at" || item2.keyy === "updated_at" ? (
              TransformDate(item[item2.keyy])
            ) : item2.keyy === "description" ? (
              <div style={{ width: "", overflow: "hidden" }} className="col-12">
                {item[item2.keyy]?.slice(0, 15) + "..."}
              </div>
            ) : item2.keyy === "category.job" ? (
              item["category"]
            ) : item2.keyy === "category" ||
              item2.keyy === "sub_category" ||
              item2.keyy === "job" ? (
              item[item2.keyy]?.title
            ) 
            :item2.keyy === "course" ? (
              item[item2.keyy]?.classification
            )
            :item2.keyy === "user" ? (
              item[item2.keyy]?.name
            )

             : item[item2.keyy] === "1996" ? (
              "Admin"
            ) : item[item2.keyy] === "1997" ? (
              "User"
            ) : item[item2.keyy] === true ? (
              "True"
            ) : item[item2.keyy] === false ? (
              "False"
            ) : (
              item[item2.keyy]
            )}
          </td>
        )
      )}

      {window.location.pathname !== "/dashboard/payment" && (
        <td>
          {window.location.pathname !== "/dashboard/job/jobrequests" && window.location.pathname !== "/dashboard/certificates" && (
            <Link to={`${item.id}`} style={{ marginRight: "10px" }}>
              <FontAwesomeIcon
                fontSize={"19px"}
                color="blue"
                icon={faPenToSquare}
              />
            </Link>
          )}

          {Currentuser.name !== item.name && (
            <FontAwesomeIcon
              onClick={() => props.Delete(item.id)}
              fontSize={"19px"}
              color="red"
              cursor={"pointer"}
              icon={faTrash}
            />
          )}
        </td>
      )}
    </tr>
  ));

  return (
    <div>
      <div className="head flex-wrap">
        {/* <div className="col-md-4 col-12"> */}
          {/* <h2>{props.Title}</h2> */}
        {/* </div> */}
        <div className="col-12 d-flex flex-wrap align-items-center gap-2 mb-3">

          {window.location.pathname !== "/dashboard/payment" && window.location.pathname !== "/dashboard/certificates" && (
            <Form.Group className="col-lg-5 col-12">
            <Form.Control
              className="search "
              placeholder="Search"
              aria-label="input-example"
              type="search"
              value={Search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSearchig(true);
              }}
            />              
          </Form.Group>
          )}

{window.location.pathname === "/dashboard/job/jobrequests" && (
            <>
              <Form.Group className="col-lg-3 col-12">
                <Form.Select
                  name="gpa"
                  className="py-2"
                  onChange={(e) => setGpa(e.target.value)}
                >
                  <option disabled selected value="">
                    Select grade:
                  </option>
                  <option value="Excellent">Excellent</option>
                  <option value="Very good">Very good</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="col-lg-3 col-12">
                <Form.Select
                  name="gpa"
                  className="py-2"
                  onChange={(e) => setJob(e.target.value)}
                >
                  <option disabled selected value="">
                    Select Job:
                  </option>
                  {showJobs}
                </Form.Select>
              </Form.Group>
            </>
          )}
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            {ShowHeader}
            {window.location.pathname !== "/dashboard/payment" && (
              <th>Action</th>
            )}
          </tr>
        </thead>

        <tbody>
          {props.Data.length === 0 && dataSent === true ? ( // if no data
            <tr>
              <td colSpan={12} className="text-center">
                No items found
              </td>
            </tr>
          ) : props.loading === true ? ( // if data still loading
            <tr>
              <td colSpan={12} className="text-center">
                Loading...
              </td>
            </tr>
          ) : Searching ? (
            <tr>
              <td colSpan={12} className="text-center">
                Searching...
              </td>
            </tr>
          ) : (
            ShowData
          )}
        </tbody>
      </Table>

      {/* Paginate */}
      <div className="d-flex align-items-center justify-content-center">
        <div className="">
          <Form.Select
            onChange={(e) => props.setLimit(e.target.value)}
            defaultValue={10}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </Form.Select>
        </div>
        <div className="mt-3 p-2">
          <PaginatedItems
            itemsPerPage={props.Limit}
            ChoosedPage={props.ChoosedPage}
            Total={props.Total}
          />
        </div>
      </div>
    </div>
  );
}
