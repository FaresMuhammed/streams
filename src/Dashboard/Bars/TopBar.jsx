import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Cookie from "cookie-universal";
import { Navigate } from "react-router-dom";
import { Menu } from "./Menucontexxt";
import axios from "axios";

export default function Topbar() {
  const menu = useContext(Menu);
  const setOpen = menu.setOpen;

  const cookie = Cookie();
  const token = cookie.get("eng");

  // To get user name
  const [Username, setUsername] = useState("");
  useEffect(() => {
    axios
      .get("https://backend.slsog.com/api/user", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setUsername(res.data.name));
  }, []);

  // Logout function
  function Handlelogout() {
    axios.get("https://backend.slsog.com/api/logout", {
      headers: { Authorization: "Bearer " + token },
    });
    window.location.pathname = "/";
    cookie.remove("eng");
  }
  // Home function
  function Home() {
    window.location.pathname = "/";
  }

  return (
    <div className="top-bar ">
      <div className="d-flex align-items-center justify-content-between h-100">
        <div className="d-flex align-items-center gap-3">
          <h1 style={{ fontWeight: "bold" }}>Dashboard</h1>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setOpen((prev) => !prev)}
            cursor={"pointer"}
            style={{
              backgroundColor: "rgba(185, 185, 185, 0.6)",
              padding: "7px",
              borderRadius: "20%",
              marginBottom: "8px",
            }}
          />
        </div>
        <div>
          <DropdownButton
            style={{ width: "100px" }}
            title={Username.slice(0, 8) + "..."}
          >
            <DropdownItem onClick={Home}>Home page</DropdownItem>
            <DropdownItem onClick={Handlelogout}>Logout</DropdownItem>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
}
