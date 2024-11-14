import Spinner from "react-bootstrap/Spinner";

export default function Loading3() {
  return (
    <div className="spinner-container-submit">
      {" "}
      <Spinner animation="border" className="loader" />;
    </div>
  );
}
