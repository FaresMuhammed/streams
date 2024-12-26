import Footer from "../HomePage/Footer/Footer";

export default function AboutUs() {
  return (
    <div>
        {/* <div className="py-5 p-4 mt-5 d-flex flex-wrap gap-md-4 border-bottom">
</div> */}

      <div className="py-5 p-4 mt-5 d-flex flex-wrap gap-md-4 border-bottom">
        <div className="d-flex flex-wrap" >
          <div className=" col-lg-6 col-12 ">
            <div className="p-lg-5 p-1 py-md-5 mb-5">

              <h2 className="mb-4">
                SERVICES
              </h2>
              <p className="mb-4">
                <p>Training and Expert Oil and Gas Solutions by Streamlines Energy Enterprise              </p>
                <p>At Streamlines Energy we focus and offer extensive technical training courses by expertise instructors of oil & gas sectors.  In addition to Specialized field development studies, field optimization studies, testing and operations services.              </p>
                <p>Our expert team combines industry knowledge with production enhancement acumen to deliver tailored solutions that drive success for our clients.              </p>
              </p>
              <p className="mb-1 fw-bold">
                •	Training <br/>
                •	Software <br/>
                •	Consultation<br/>
                •	Operations<br/>
              </p>
          </div>
        </div>
        <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center">
          <img className="img1" src={"compound-balance-beam-pump-manufacturers-1.jpg"}/>
        </div>
      </div>
      </div>

      <div className=" p-4 d-flex flex-wrap gap-md-4 border-bottom">
        <div className="d-flex flex-wrap" >
          <div className=" col-lg-6 col-12 ">
            <div className="p-lg-5 p-1 py-md-5 mb-5">

              <h2 className="mb-4">
              OUR TEAM
              </h2>
              <p className="mb-4">
                <p>With more than 40 years of combined experience in oil and gas chain from leading companies, we focus on providing clients with solutions that maximize value in a rapidly evolving oil & gas sector.</p>
                <p>Our extensive network allows us to identify and execute the best opportunities for training, field development, field study, field optimization, testing, and operations.</p>
                <p>Our professional team consists of experienced managers, technical specialists, and instructors from reputable local engineering partners.</p>
                <p>Together, we assist our clients in successfully managing multidisciplinary studies, field development, and field optimization. We focus on providing clients with solutions that maximize value in the rapidly evolving oil and gas sectors.</p>
              </p>
              <p className="mb-1 fw-bold">
                •	Growth Manager<br/>
                •	General Manager<br/>
                •	Service Manager<br/>
                •	Technical Team<br/>
                •	Support & HR Team<br/>
                •	Accounting Team<br/>
              </p>
          </div>
        </div>
        <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center">
          <img className="img1" src={"Screenshot 2024-12-23 133136.png"}/>
        </div>
      </div>
      </div>




      <div className="p-lg-5 "
        style={{  display: 'flex' , flexDirection: 'column'}}
      >

        <div className="col-12 p-4">
            <div
              className="d-flex align-items-center"
            >
              <h4 style={{ backgroundColor: "#BF2A2A" , color: 'white' , width: '150px'}} className="center p-1">
              HOME
              </h4>
            </div>
            <p className="mb-4">
                <p>Powering the world with Streamlines Energy Enterprise. We provide innovative and sustainable solutions for oil & gas industry.                </p>
              </p>
          </div>

        <div className="col-12 p-4"  style={{marginTop: '-30px'}}>
            <div
              className="d-flex align-items-center"
            >
              <h4 style={{ backgroundColor: "#BF2A2A" , color: 'white' , width: '150px'}} className="center p-1">
              ABOUT US
              </h4>
            </div>
            <p className="mb-4">
                <p>We are your Trusted Partner in the Oil and Gas Industry.                </p>
                <p>Streamlines Energy is a service and supportive company focused on oil and gas sectors. We specialize in Training, Software Modelling, Field Development and Field Optimization Study, Testing and operations.                </p>
                <p>Our unique approach combines corporate Training, operational, and technical expertise across various oil/gas sectors.                </p>
              </p>
          </div>

          <div className="col-12 p-4" style={{marginTop: '-30px'}}>
            <div
              className="d-flex align-items-center"
            >
              <h4 style={{ backgroundColor: "#BF2A2A" , color: 'white' , width: '150px'}} className="center p-1">
              VISION
              </h4>
            </div>
            <p>
              Leading sustainable Training, Studies, Modelling & field operation support services. 
              Development the way to get started is to quit talking and begin doing.
            </p>
          </div>
          <div className="col-12 p-4" style={{marginTop: '-30px'}}>
            <div
              className="d-flex align-items-center"
            >
              <h4 style={{ backgroundColor: "#BF2A2A" , color: 'white' , width: '150px'}} className="center p-1">
              MISSION
              </h4>
            </div>
            <p>
            Evolve our business to add value to our people, customers, and shareholders by following the highest safety, technological, and operational standards.
            </p>
          </div>
        </div>

      <Footer className={"color-white"}/>
    </div>
  );
}
