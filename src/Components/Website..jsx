import { Outlet } from "react-router-dom";
import Header from "./HomePage/Header/Header";

function Website() {
  return (
    <div className="containerr">
      <Header/>
      <Outlet />
    </div>
  );
}

export default Website;