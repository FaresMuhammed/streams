import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className={`d-flex justify-content-center flex-wrap`} style={{backgroundColor: ' rgb(231, 232, 238)'}}>

      <div
        className="col-lg-4 col-12 mt-5 p-md-5 p-4 border-bottom "
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h6
          className={`mb-5 ${props.className}`}
          style={{ fontSize: "18px" }}
        >
          HEAD OFFICE
        </h6>
        <p className={`mb-3 mb-0   ${props.className}`} style={{ fontSize: "14px" }}>
          9235/8 Adly El-Melegy
          Al Abageyah, El Mokattam, Cairo Governorate, 11571 , Egypt
        </p>
        {/* <p className={` ${props.className}`} style={{ fontSize: "14px" }}> */}
        <iframe className="w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6388.231194968237!2d31.3084584!3d30.0069116!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839799f7efcc1%3A0xfd6451e9aabf945!2sStreamlines%20Oil%20and%20Gas!5e1!3m2!1sar!2seg!4v1731263637895!5m2!1sar!2seg"  height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        {/* </p>/ */}
      </div>


      <div
        className="col-lg-4 col-12 mt-5 p-md-5 p-4 border-bottom  "
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h6
          className={`mb-5  Link22  ${props.className}`}
          style={{fontSize: "18px" }}
        >
          SOCIALS
        </h6>
        <Link
          className={` mb-0 py-4 ln ${props.className}`}
          style={{ fontSize: "14px" , textDecoration: 'none' }}
        >
          Facebook
        </Link>
        <Link
          className={` mb-0  py-4 ln ${props.className}`}
          style={{ fontSize: "14px"  , textDecoration: 'none' }}
        >
          Instagram
        </Link>
        <Link
          className={` mb-0  py-4 ln ${props.className}`}
          style={{ fontSize: "14px"  , textDecoration: 'none' }}
        >
          Linkedin
        </Link>
      </div>
      <div
        className="col-lg-4 col-12 mt-5 p-md-5 p-4 "
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h6
          className={`mb-5 Link22  ${props.className}`}
          style={{ fontSize: "18px" }}
        >
          INQUIRIES
        </h6>

        <Link
          to={"/contactus"}
          className={`mb-5 py-4 ln ${props.className}`}
          style={{ fontSize: "14px" }}
        >
          Become a subcontractor
        </Link>
      </div>
    </div>
  );
}
