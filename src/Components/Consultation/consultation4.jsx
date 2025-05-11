import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../HomePage/Footer/Footer";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./consultation.css";
import { Link, NavLink } from "react-router-dom";
import image from "../../IMAGES/gpi-TsdsFGiGNvogMnditwzUVJl3GxiSuJZ90Af_Z9A_plaintext_638369453273943522.jpg";
import image2 from "../../IMAGES/wallpaper-625623_640.png";
import image3 from "../../IMAGES/contact-us-team.jpg";


export default function Consultation4() {
  return (
    <div className="" style={{ backgroundColor: "#FAFAFA" }}>
      <div
        className="d-flex "
        style={{ flexDirection: "column", marginTop: "20px" }}
      >
        <div
          className="d-flex mt-5 flex-wrap "
          style={{
            position: "relative",
            color: "#EDEDED",
            alignItems: "center",
          }}
        >
          <img
            className="img11 blurr w-100"
            src={image2}
            style={{
              position: "absolute",
              top: "0",
              zIndex: "1",
              objectFit: "cover",
            }}
          />
          <div
            className="position-absolute top-0 start-0 bg-black w-100 "
            style={{
              zIndex: "5",
              opacity: "0.3",
              height: "100%",
              marginTop: "20px",
            }}
          ></div>

          <div
            className=" d-flex flex-wrap mt-5 mb-5 col-md-5 col-6 m-md-5 m-3 p-3  shadoww"
            style={{ zIndex: "10" }}
          >
            <div
              className="mt-lg-5 mt-3 m-3"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                zIndex: "10",
              }}
            >
              <p>Consulting services</p>
              <h1 className=" mb-3 mb-lg-4" style={{ fontSize: "32px" }}>
                Strategy
              </h1>
              <h6>
                Effective strategy implementation is associated with a 2.4x
                greater likelihood of being a top-performing company in terms of
                revenue growth and profitability.
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className=" p-5 center flex-wrap gap-4" style={{alignItems:'flex-start'}}>

        <div className="col-lg-7 col-10 mb-5">
          <img
            className="img1 col-12 mb-4"
            style={{ objectFit: "cover", height: "100%" }}
            src={image}
          />
          <h2 className="mb-4" style={{ textAlign: "center" }}>
            With our deep expertise in strategic planning and business strategy
            consulting, we excel in crafting strategies that unlock full
            economic potential, optimize portfolios, and harness synergies.
          </h2>
          <h5 style={{ color: "#666666", textAlign: "center" }}>
            Strategic planning is essential for any organization that wants to
            achieve its long-term goals. We utilize unique methodologies, we
            offer comprehensive solutions for defining and implementing
            strategies, empowering organizations to achieve their objectives
            with precision.
          </h5>
        </div>

        <div
          className="col-lg-4 col-12 mt-3 d-flex"
          style={{ flexDirection: "column", alignItems: "flex-start" }}
        >

          <div className="col-12">
            <h3 style={{ color: "#034638" }} className="mb-4 fw-bold">
              SERVICES LIST
            </h3>
          </div>
          <NavLink className="consulting col-12 mb-3" to={"/consultation/strategy"}>
            <div className="  p-3 fw-bold">Strategy consulting </div>
          </NavLink>
          <NavLink className="consulting col-12 mb-3" to={"/consultation/2"}> 
            <div className="  p-3 fw-bold">Corporate & Family Governance</div>
          </NavLink>
          <NavLink className="consulting col-12 mb-3" to={"/consultation/3"}>
            <div className="  p-3 fw-bold">People and Organizations </div>
          </NavLink>
          <NavLink className="consulting col-12 mb-3" to={"/consultation/4"}>
            <div className="  p-3 fw-bold">Operational Excellence </div>
          </NavLink>
          <NavLink className="consulting col-12 mb-3" to={"/consultation/5"}>
            <div className="  p-3 fw-bold">Strategy </div>
          </NavLink>
          <NavLink className="consulting col-12 mb-3" to={"/consultation/6"}>
            <div className="  p-3 fw-bold">Strategy </div>
          </NavLink>


        <div className="d-flex col-12" style={{ flexDirection: "column" }}>
        <div
          className="d-flex flex-wrap center col-12"
          style={{ position: "relative", color: "#EDEDED" , alignItems: 'center'  }}
        >
          <img
            className="img11 blurr w-100 "
            src={image3}
            style={{
              position: "absolute",
              top: "0",
              zIndex: "1",
              objectFit: "cover",
            }}
          />
          <div
            className="position-absolute top-0 start-0 bg-black w-100"
            style={{ zIndex: "1", opacity: "0.4", height: "100%" , marginTop: '20px'}}
          >
          </div>

          <div className=" d-flex flex-wrap mt-5 mb-5 m-md-5 m-3 p-3 " style={{ zIndex: "10" }}>
            <div className="mt-5 m-3" style={{ display: 'flex' , flexDirection: 'column' , justifyContent: 'flex-start' , zIndex: "10" }}>
              <h2 style={{textAlign: ''}} className="mt-5 mb-4 fw-bold">
              How Can We Support ?
              </h2>
              <h5 className="mb-3" style={{textAlign: ''}}>Our team is ready to help your business.</h5>
              <Link to={"/contactus"} className="">
                <button className="btn btn-primary">
                  Contact us
                </button>
              </Link>
            </div>
            </div>
        </div>
        </div>
        </div>
      </div>

      <div className="mb-5 p-4">
      <h3 className="fw-bold mb-5" style={{ textAlign: 'center' }}>Sustainable Success: Tailored Consulting Services for Optimal Business Growth </h3>

        <p style={{ textAlign: "center", color: "#756161", fontSize: "20px" }}>
          Our management consulting services are intended to address the most
          urgent concerns and maximize potential for organizations in the MENA
          region, which includes Egypt, Saudi Arabia, and the United Arab
          Emirates. We specialize in strategy, governance, family business,
          marketing, organization development, transformation, mergers and
          acquisitions, and sustainability across a wide range of sectors.
        </p>
        <p style={{ textAlign: "center", color: "#756161", fontSize: "20px" }}>
          What distinguishes us is our holistic approach: we go beyond
          individual solutions to provide comprehensive value across all aspects
          of your company. By breaking down silos and streamlining the whole
          system, we generate a multiplier effect that promotes long-term
          development and increases impact.
        </p>
        <p style={{ textAlign: "center", color: "#756161", fontSize: "20px" }}>
          Partner with us to transform your dreams into reality, enabling your
          company to dominate in the competitive GCC and MENA markets.
        </p>
        <p style={{ textAlign: "center", color: "#756161", fontSize: "20px" }}>
          Our management consulting services are intended to address the most
          urgent concerns and maximize potential for organizations in the MENA
          region, which includes Egypt, Saudi Arabia, and the United Arab
          Emirates. We specialize in strategy, governance, family business,
          marketing, organization development, transformation, mergers and
          acquisitions, and sustainability across a wide range of sectors.
        </p>
        <p style={{ textAlign: "center", color: "#756161", fontSize: "20px" }}>
          What distinguishes us is our holistic approach: we go beyond
          individual solutions to provide comprehensive value across all aspects
          of your company. By breaking down silos and streamlining the whole
          system, we generate a multiplier effect that promotes long-term
          development and increases impact.
        </p>
        <p style={{ textAlign: "center", color: "#756161", fontSize: "20px" }}>
          Partner with us to transform your dreams into reality, enabling your
          company to dominate in the competitive GCC and MENA markets.
        </p>
      </div>

      <div
        className="d-flex "
        style={{ flexDirection: "column", marginTop: "20px" }}
      >
        <div
          className="d-flex flex-wrap center"
          style={{
            position: "relative",
            color: "#EDEDED",
            alignItems: "center",
          }}
        >
          <img
            className="img11 blurr w-100"
            src={"61djTEUpiDL._AC_UF1000,1000_QL80_.jpg"}
            style={{
              position: "absolute",
              top: "0",
              zIndex: "1",
              objectFit: "cover",
            }}
          />
          <div
            className="position-absolute top-0 start-0 bg-black w-100"
            style={{
              zIndex: "1",
              opacity: "0.4",
              height: "100%",
              marginTop: "20px",
            }}
          ></div>
        </div>
      </div>

      <Footer className={"color-white"} />
    </div>
  );
}
