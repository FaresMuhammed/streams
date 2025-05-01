import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../HomePage/Footer/Footer";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./consultation.css";
import { Link } from "react-router-dom";

export default function Consultation() {
  const onButtonClick = () => {
    const pdfUrl = "Streamlines-Consultation-and-Integrated-Solutions-Services-CISS.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <div className="" style={{ backgroundColor: '#FAFAFA'}}>

      <div className="d-flex " style={{ flexDirection: "column" , marginTop: '20px'}}>
        <div
          className="d-flex mt-5 flex-wrap "
          style={{ position: "relative", color: "#EDEDED" , alignItems: 'center' }}
        >
          <img
            className="img11 blurr w-100"
            src={"wallpaper-625623_640.png"}
            style={{
              position: "absolute",
              top: "0",
              zIndex: "1",
              objectFit: "cover",
            }}
          />
          <div
            className="position-absolute top-0 start-0 bg-black w-100 "
            style={{ zIndex: "5", opacity: "0.3", height: "100%" , marginTop: '20px'}}
          >
          </div>

          <div className=" d-flex flex-wrap mt-5 mb-5 col-md-5 col-6 m-md-5 m-3 p-3  shadoww" style={{ zIndex: "10" }}>
            <div className="mt-5 m-3  " style={{ display: 'flex' , flexDirection: 'column' , justifyContent: 'flex-start' , zIndex: "10" }}>
              <p>Consulting services</p>
              <h1 className="mb-lg-5 mb-3" style={{ fontSize: "35px" }}>
              Consulting Services
              </h1>
            </div>
            </div>
        </div>
        </div>

        <div className="center mt-5 p-2 mb-5" style={{flexDirection: 'column' ,  backgroundColor: '#FAFAFA' }}>
          <div style={{width: '90%'}}>
            <h5 className="fw-bold mb-5" style={{color:'#00B140' ,  textAlign: 'center' }}>Our Service </h5>
            <h2 className="fw-bold mb-5" style={{  textAlign: 'center'  }}>The Work We Do </h2>
            <h3 className=" mb-5" style={{ textAlign: 'center' }}>Sustainable Success: Tailored Consulting Services for Optimal Business Growth </h3>
            <p style={{textAlign: 'center' , color: '#756161'}}>With the primary objective to achieve sustainability, LOGIC Consulting service offerings are designed and developed with the aim of tailoring solutions that fit the needs of your business to sky-rocket its success. LOGIC Consulting develops strategic solutions that flourish your business’ growth and sustains its success and applies up-to-date management techniques, complemented by our teams’ cumulative expertise, and merged with our fresh talent’s ingenious creativity to consistently produce day-to-day optimized services for our clients.</p>
            <h1 className="mb-3" style={{ textAlign: 'center' }}>Driving Excellence in Strategy, Transformation, and Sustainability in the MENA Region</h1>
            <h4 style={{textAlign: 'center'}}>Our Expertise and Services </h4>
            <p style={{textAlign: 'center' , color: '#756161'}}>Our management consulting services are intended to address the most urgent concerns and maximize potential for organizations in the MENA region, which includes Egypt, Saudi Arabia, and the United Arab Emirates. We specialize in strategy, governance, family business, marketing, organization development, transformation, mergers and acquisitions, and sustainability across a wide range of sectors.</p>
            <p style={{textAlign: 'center' , color: '#756161'}}>What distinguishes us is our holistic approach: we go beyond individual solutions to provide comprehensive value across all aspects of your company. By breaking down silos and streamlining the whole system, we generate a multiplier effect that promotes long-term development and increases impact.</p>
            <p style={{textAlign: 'center' , color: '#756161'}}>Partner with us to transform your dreams into reality, enabling your company to dominate in the competitive GCC and MENA markets.</p>
          </div>
        </div>
        
        <div className="mt-5 mb-5" >
          <div className="center gap-3 flex-wrap col-12">
            <div className=" col-5 col-lg-2 shadow  p-md-3 p-1 divvv" style={{position: 'relative'}}>
              <h5 style={{textAlign: 'center'}} className="center mb-3 mt-5 fw-bold">Strategy Consulting</h5>
              <p className="mb-5 b1" style={{textAlign: 'center' , color: ''}}>Leveraging extensive expertise, we excel in shaping strategies that unlock full economic potential</p>
              <div className="center"><h6 style={{ textAlign: 'center' , color: '#00B140' , position: 'absolute' , bottom: "40px"}} className="">READ MORE <FontAwesomeIcon icon={faArrowRight}/></h6> </div>
            </div>

            <div className="col-5 col-lg-2 shadow  p-md-3 p-1 divvv" style={{position: 'relative'}}>
              <h5 style={{textAlign: 'center' }} className="center mb-3 mt-5 fw-bold">Corporate & Family Governance</h5>
              <p style={{textAlign: 'center' , color: ''}} className="mb-5 b1">Cultivating governance for business prosperity and family unity.</p>
              <div className="center"><h6 style={{ textAlign: 'center' , color: '#00B140' , position: 'absolute' , bottom: "40px"}} className="">READ MORE <FontAwesomeIcon icon={faArrowRight}/></h6> </div>
            </div>

            <div className="col-5 col-lg-2  shadow p-md-3 p-1 divvv" style={{position: 'relative'}}>
              <h5 style={{textAlign: 'center' }} className="center mb-3 mt-5 fw-bold">Corporate & Family Governance</h5>
              <p style={{textAlign: 'center' , color: ''}} className=" mb-5 b1">Cultivating governance for business prosperity and family unity.</p>
              <div className="center"><h6 style={{ textAlign: 'center' , color: '#00B140' , position: 'absolute' , bottom: "40px"}} className="">READ MORE <FontAwesomeIcon icon={faArrowRight}/></h6> </div>
            </div>

            <div className="col-5 col-lg-2 shadow p-md-3 p-1 divvv" style={{position: 'relative'}}>
              <h5 style={{textAlign: 'center' }} className="center mb-3 mt-5 fw-bold">Corporate & Family Governance</h5>
              <p style={{textAlign: 'center' , color: ''}} className="mb-5 b1">Cultivating governance for business prosperity and family unity.</p>
              <div className="center"><h6 style={{ textAlign: 'center' , color: '#00B140' , position: 'absolute' , bottom: "40px"}} className="">READ MORE <FontAwesomeIcon icon={faArrowRight}/></h6> </div>
            </div>
          </div>
        </div>



        <div className="d-flex " style={{ flexDirection: "column" , marginTop: '20px'}}>
        <div
          className="d-flex flex-wrap center"
          style={{ position: "relative", color: "#EDEDED" , alignItems: 'center'  }}
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
            style={{ zIndex: "1", opacity: "0.4", height: "100%" , marginTop: '20px'}}
          >
          </div>

          <div className=" d-flex flex-wrap mt-5 mb-5 m-md-5 m-3 p-3 " style={{ zIndex: "10" }}>
            <div className="mt-5 m-3" style={{ display: 'flex' , flexDirection: 'column' , justifyContent: 'flex-start' , zIndex: "10" }}>
              <h2 style={{textAlign: 'center'}} className="mt-5 mb-5 fw-bold">
                What lies ahead for your organization?
              </h2>
              <h5 className="mb-5" style={{textAlign: 'center'}}>The answer lies in partnering with us to unlock new horizons, embrace growth, and thrive in the dynamic world.</h5>
              <Link to={"/contactus"} className="center">
                <button className="btn btn-primary">
                  Contact us
                </button>
              </Link>
            </div>
            </div>
        </div>
        </div>

      <Footer className={"color-white"}/>
    </div>
  );
}
