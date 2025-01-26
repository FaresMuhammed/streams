// import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import PaginatedItems from "./Pagination/Pagination";
import { useEffect, useState } from "react";
import TransformDate from "./DateFunction/Date";
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
  async function Getsearch() {
    try {
      const res = await axios.post(
        `http://backend.slsog.com/api/users/search?email=${Search} `,
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
  }, [Search]);

  const FilteredData = Search.length > 0 ? SearchResult : props.Data;
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
            {
              item2.keyy === "cv" ? (
                <img
                  width="80px"
                  src={`http://backend.slsog.com${item[item2.keyy]}`}
                />
              ) : // ) : item2.keyy === "images" ? (
              //   <div>
              //     {item[item2.keyy].map((img) => (
              //       <img
              //         style={{
              //           width: "80px",
              //           display: "flex",
              //           flexDirection: "column",
              //           marginBottom: "10px",
              //         }}
              //         src={img.image}
              //       />
              //     ))}
              //   </div>
              item2.keyy === "created_at" || item2.keyy === "updated_at" ? (
                TransformDate(item[item2.keyy])
              ) : item2.keyy === "description" ? (
                // <td >
                <div
                  style={{ width: "", overflow: "hidden" }}
                  className="col-12"
                >
                  {item[item2.keyy].slice(0, 20) + "..."}
                </div>
              ) : // </td>
              // Condition on role
              item[item2.keyy] === "2001" ? (
                "Admin"
              ) : item[item2.keyy] === "1996" ? (
                "User"
              ) : (
                item[item2.keyy]
              ) // if the data isn't role & image , show it as is it
            }
            {
              Currentuser && item[item2.keyy] === Currentuser.name && " (You)" // if the page have current user and his name equals item's name add 'You'
            }
          </td>
        )
      )}

      <td>
        <Link to={`${item.id}`} style={{ marginRight: "10px" }}>
          <FontAwesomeIcon
            fontSize={"19px"}
            color="blue"
            icon={faPenToSquare}
          />
        </Link>

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
    </tr>
  ));

  return (
    <div>
      <div className="head">
        <div>
          <h2>{props.Title}</h2>
        </div>
        <div>
          <Form.Control
            className="my-2 search"
            placeholder="Search"
            aria-label="input-example"
            type="search"
            value={Search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSearchig(true);
            }} // to run loading while searching
          />
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            {ShowHeader}
            <th>ACTION</th>
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
