import { Outlet } from "react-router-dom";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

function HomePage() {
  return (
    <div className="containerr">
      <Body />
      <Footer />
      <Outlet />
    </div>
  );
}

export default HomePage;
