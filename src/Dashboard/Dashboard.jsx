import { Outlet } from "react-router-dom";
import "./Dashboard.css";
import Topbar from "./Bars/TopBar";
import Sidebar from "./Bars/SideBar";

export default function Dashboard() {
  return (
    <div className="position-relative ">
      <Topbar />
      <div style={{ marginTop: "70px" }} className="dashboard d-flex gap-1">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
