import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./bars.css";
import { NavLink, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Links } from "./Navlink";
import { WindowSize } from "./Windowcontext";
import { Menu } from "./Menucontexxt";
import axios from "axios";
import Cookie from "cookie-universal";

export default function Sidebar() {
  const menu = useContext(Menu);
  const Isopen = menu.Open;

  const WindowContext = useContext(WindowSize);
  const windowSize = WindowContext.windowSize;

  const cookie = Cookie();
  const token = cookie.get("eng");

  // To get userrole
  const [UserRole, setUserRole] = useState("");
  useEffect(() => {
    axios
      .get("https://backend.slsog.com/api/user", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((data) => setUserRole(data.data.role));
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "70px",
          left: "0",
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          display: windowSize < "768" && Isopen ? "block" : "none",
        }}
      ></div>

      <div
        className="side-bar pt-3"
        style={{
          left: windowSize < "768" ? (Isopen ? 0 : "-100%") : 0,
          width: Isopen ? "215px" : "64px",
          transition: ".7s",
          position: windowSize < "768" ? "fixed" : "sticky",
        }}
      >
        {Links.map(
          (Link, key) =>
            Link.role.includes(UserRole) && (
              <NavLink
                key={key}
                to={Link.path}
                className="d-flex align-items-center gap-2 side-bar-link"
              >
                <FontAwesomeIcon
                  icon={Link.icon}
                  style={{ padding: Isopen ? "15px 8px 15px 15px" : "15px" }}
                />

                <p
                  className="m-0 "
                  style={{ display: Isopen ? "block" : "none", width: "120px" }}
                >
                  {Link.name}
                </p>
              </NavLink>
            )
        )}
      </div>
    </>
  );
}
