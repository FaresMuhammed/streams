import Footer from "../HomePage/Footer/Footer";

export default function AboutUs() {
  return (
    <div className="bg-black">
        <div className="py-5 p-4 mt-5 d-flex flex-wrap gap-md-4">

      <div className="d-flex flex-wrap mb-5" style={{ marginBottom: "200px" }}>
        <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center">
          <img className="img1" src={"compound-balance-nodding-donkey.jpg"} />
        </div>

        <div className=" col-lg-6 col-12 ">
          <div className="p-md-5 p-4">
            <h2 className="mb-4" style={{ color: "white" }}>
              ABOUT US
            </h2>
            {/* <h1
              className="mb-5 display-3"
              style={{ color: "#FFFFFF", fontWeight: "bold" }}
            >
              Your Gate to INFINITY solutions
            </h1> */}
            {/* <p className="mb-2" style={{ color: "#A7A7A7" }}>
              The first spark of Infinity Corp. shone in the sky of Egypt in
              2014, serving the majority of the Egyptian market ever since.
            </p>
            <p className="mb-2" style={{ color: "#A7A7A7" }}>
              Infinity Advertising Agency provides 360⁰ marketing creative
              solutions & brings together all different forms to develop
              integrated campaigns that suit your entire needs & expectations.
            </p>
            <p className="mb-2" style={{ color: "#A7A7A7" }}>
              This is a place where people gather without barriers, where trust
              & respect dominate, and where data, technology & creativity meet
              in endless possibilities.{" "}
            </p>
            <p className="mb-5" style={{ color: "#A7A7A7" }}>
              All those incredible powers are used for the benefit of everyone’s
              good.
            </p>
            <p className="mb-2" style={{ color: "#A7A7A7" }}>
              This is Infinity Corp Advertising Agency Recognizing the immense
              growth potential, we have decided to extend our professional
              services and inclusive capabilities to the MENA region.
            </p> */}
            <p className="mb-2" style={{ color: "#A7A7A7" }}>
            At Streamlines, we strive to advance the oil and gas industry through innovative services, expert insights, and leading-edge technology. Our team of petroleum engineers and industry specialists brings decades of experience across production testing, EOR applications, software integration, and consulting. Our goal is to drive efficient, data-centered solutions that maximize resource recovery, ensure operational safety, and promote sustainable field management, setting a standard of service excellence in the energy sector.
            </p>
          </div>
        </div>
      </div>
      </div>

      <div
        style={{ backgroundColor: "#15171C", marginBottom: "200px" , display: 'flex' , flexDirection: 'column'}}
      >


        
        {/* <div className="col-12 d-flex flex-wrap p-lg-5"> */}

          <div className="col-12 p-4">
            <div
              className="d-flex align-items-center"
            >
              <h1 style={{ backgroundColor: "#DD4242" }} className="d-flex">
                VISION
              </h1>
            </div>
            <p style={{ color: "#9D9D9E" }}>
              Our vision is to create a whole new marketing generation & to be
              one of the top advertising agencies in the middle east. We plan to
              demonstrate our impeccable philosophy by constantly keeping every
              one of our clients updated on the most recent digital marketing &
              advertising trends.
            </p>
          </div>
          <div className="col-12 p-4">
            <div
              className="d-flex align-items-center"
              // style={{ backgroundColor: "#DD4242" }}
            >
              <h1 style={{ backgroundColor: "#DD4242" }} className="d-flex">
                MISSION
              </h1>
            </div>
            <p style={{ color: "#9D9D9E" }}>
              We are involved in increasing your market position & growth by
              providing a wide variety of advertising services to ensure that
              your brand will expand and reach the most significant number of
              interested audience and loyal buyers.
            </p>
          </div>
        </div>
        <div className="col-12 w-100">
          <img className="img1 w-100" src="sucker rod2.jpg" />
        </div>
      {/* </div> */}

      <Footer className={"color-white"}/>
    </div>
  );
}
