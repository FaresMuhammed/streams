import "./Loading.css";
import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <div className="spinner-container-submit">
      {" "}
      <Spinner animation="border" className="loader" />;
    </div>
  );
}
