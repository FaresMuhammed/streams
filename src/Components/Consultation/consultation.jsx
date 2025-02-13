import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../HomePage/Footer/Footer";
import { arrowAltFromLeft } from "fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
    <div>
      <div className="py-lg-2 p-4 mt-5 d-flex flex-wrap gap-md-4 border-bottom">
        <div className="d-flex flex-wrap mt-5" >
          <div className=" col-lg-6 col-12 ">
            <div className="p-lg-5 p-1 py-md-5 mb-5">

              <h2 className="mb-4">
              Why Choose Streamlines?
              </h2>
              <p className="mb-4">
                <p className="mb-2">Global Expertise: Serving energy companies worldwide with a proven track record.                <br/></p>
                <p className="mb-2">Innovative Technology: Utilizing cutting-edge tools and best practices to tackle complex challenges.                <br/></p>
                <p className="mb-5">Integrated Solutions: A holistic approach that optimizes the entire value chain.<br/></p>
              </p>
          </div>
        </div>
        <div className="col-lg-4 col-12 d-flex align-items-center justify-content-center">
          <img className="img1" src={"WhatsApp Image 2025-01-15 at 09.37.59_0573c1cf.jpg"}/>
        </div>
      </div>
      </div>

      <div className="py-lg-2 p-4  d-flex flex-wrap gap-md-4 border-bottom">
        <div className="d-flex flex-wrap " >
          <div className=" col-lg-6 col-12 ">
            <div className="p-lg-5 p-1 py-md-5 mb-5">

              <h2 className="mb-4">
              What We Offer
              <h5>End-to-End Services Across the Asset Lifecycle:
              </h5>
              </h2>
              <p className="mb-4">
                <p className="mb-2">Upstream: Exploration and reservoir management.                <br/></p>
                <p className="mb-2">Midstream: Operational efficiency and optimization.                <br/></p>
                <p className="mb-5">Downstream: Production and software solutions.<br/></p>
              </p>
          </div>
        </div>
        <div className=" col-lg-4 col-12 d-flex align-items-center justify-content-center">
          <img className="img1 " style={{borderRadius: '30px'}} src={"WhatsApp Image 2025-01-16 at 10.14.38_6110b8b7.jpg"}/>
        </div>
      </div>
      </div>

      <div className="py-lg-2 p-4 d-flex flex-wrap gap-md-4 border-bottom">
        <div className="d-flex flex-wrap" >
          <div className=" col-lg-6 col-12 ">
            <div className="p-lg-5 p-1 py-md-5 mb-5">

              <h2 className="mb-4">
              Key Benefits
              </h2>
              <p className="mb-4">
                <p className="mb-2">Tailored Strategies: Customized solutions to align with your strategic goals.                <br/></p>
                <p className="mb-2">Sustainable Results: Delivering both immediate performance gains and long-term success.               <br/></p>
                <p className="mb-5">Innovative Methods: Continuous adaptation to emerging trends in energy.                <br/></p>
              </p>
          </div>
        </div>
        <div className="col-lg-4 col-12 d-flex align-items-center justify-content-center">
          <img className="img1" src={"WhatsApp Image 2025-01-15 at 09.38.00_0d2fd132.jpg"}/>
        </div>
      </div>
      </div>

      <div className="py-lg-2 p-4 d-flex flex-wrap gap-md-4 mb-5">
        <div className="d-flex flex-wrap" >
          <div className=" col-lg-6 col-12 ">
            <div className="p-lg-5 p-1 py-md-5 mb-5">
              <h2 className="mb-4">
              Our Approach
              </h2>
              <p className="mb-4">
                <p className="mb-2">Comprehensive Insights: Addressing interconnected technical, operational, and business challenges.                <br/></p>
                <p className="mb-2">Operational Excellence: Identifying optimization opportunities at every stage.                <br/></p>
                <p className="mb-5">Client-Centric Focus: Deep understanding of unique industry challenges and needs.                <br/></p>
              </p>
          </div>
        </div>
        <div className="col-lg-4 col-12 d-flex align-items-center justify-content-center">
          <img className="img1" src={"WhatsApp Image 2025-01-15 at 09.38.00_7d38156d.jpg"}/>
        </div>
      </div>
      </div>


      <div className="py-lg-0 p-4 d-flex flex-wrap gap-md-4">
          <div className=" col-lg-6 col-12 ">
            <div className="p-lg-5 p-1 py-md-5">
              <button className="btn btn-primary" onClick={onButtonClick}>Learn more <FontAwesomeIcon icon={faArrowRight}/></button>
        </div>
        </div>
        </div>


      <Footer className={"color-white"}/>
    </div>
  );
}
