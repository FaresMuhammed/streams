import Footer from "../HomePage/Footer/Footer";
import "./Aboutus.css";

export default function AboutUs() {
  return (
    <div>
      <div className="d-flex mb-5" style={{ flexDirection: "column" , marginTop: '20px'}}>
        <div
          className="d-flex mt-5 flex-wrap center"
          style={{ position: "relative", color: "#EDEDED" , alignItems: 'center'  }}
        >
          <img
            className="img11 blurr w-100"
            src={"inner-block-picture01.jpg"}
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
            <div className="mt-5 m-3  " style={{ display: 'flex' , flexDirection: 'column' , justifyContent: 'flex-start' , zIndex: "10" }}>
              <h1 className="mt-5 mb-5" style={{ fontSize: "65px" }}>
                About Us
              </h1>
            </div>
            </div>
        </div>
        </div>

        <div className="mt-5 p-5 center flex-wrap gap-3">
            <div className=" col-12 col-lg-3" style={{flexDirection: 'column' }}>
              <h6 style={{color: '#2D87E1' , textAlign: 'start'}}>_________  Our journey</h6>
              <h1 className="mb-4" style={{ fontSize:'48px'}}>Our story started with a simple idea</h1>
              <p style={{color: '#4E4E4E' , fontSize: '17px'}}>Over the years, we have grown from a small team of consultants to a leading consulting firm, serving clients across industries and geographies.</p>
            </div>

            <div className=" col-12 col-lg-8">
              <div className="center gap-2">
                <img className="img1 col-6" style={{height: '200px' , objectFit: 'cover'}} src={"qoEo7LvB2AJpLlj4XbxxKSr4do.jpg"}/>
                <img className="img1 col-6" style={{height: '200px' , objectFit: 'cover'}} src={"NTsWqEzpbW2qr5GHmGwX3pJIF3U.jpg"}/>
              </div>
              <div className="center gap-2">
                <img className="img1 col-6" style={{height: '200px' , objectFit: 'cover'}}  src={"pwOCQ86eV6uTDBY7fWUfJB09WU.jpg"}/>
                <img className="img1 col-6" style={{height: '200px' , objectFit: 'cover'}}  src={"doDcjWgaNg5KHRfsgggkyFT0Pg.jpg"}/>
              </div>
            </div>
        </div>

        <div className="mt-5 p-5 center flex-wrap gap-2" style={{backgroundColor: '#F2F2F2'}}>
            
          <div className="col-lg-6 col-10 mb-5">
            <img className="img1" style={{ objectFit: 'cover' , height: '100%'}} src={"XOgTNGhNhIIdGFoazkqqnG9QmE.jpg"}/>
          </div>

          <div className="col-lg-5 col-12  mt-5 d-flex" style={{flexDirection:'column' , alignItems: 'center'}}>
            <h4 className="mb-4">Our values</h4>
            <p className="mb-5" style={{color: '#5D5D5D'}}>At the heart of Consulting are our core values – integrity, excellence, collaboration, and innovation. These values guide everything we do, from the way we interact with clients and colleagues to the solutions we deliver.</p>
            <h4 className="mb-4">Our approach</h4>
            <p className="" style={{color: '#5D5D5D'}}>We believe in taking the time to understand our clients' needs, challenges, and objectives, and developing solutions that deliver tangible results. We work hand-in-hand with our clients every step of the way to ensure success.</p>
          </div>
        </div>


        <div className="d-flex" style={{ flexDirection: "column"}}>
        <div
          className="d-flex flex-wrap center"
          style={{ position: "relative", color: "#EDEDED" , alignItems: 'center' }}
        >
          <img
            className="img11 blurr w-100"
            src={"images (2).jpg"}
            style={{
              position: "absolute",
              // top: "0",
              zIndex: "1",
              objectFit: "cover",
            }}
          />
          <div
            className="position-absolute top-0 start-0 bg-black w-100"
            style={{ zIndex: "1", opacity: "0.4", height: "100%" , marginTop: '10px'}}
          >
          </div>

          <div className=" d-flex flex-wrap mt-5 mb-5 m-md-5 m-3 p-3 col-12" style={{ zIndex: "10" , justifyContent: 'space-around' }}>
            {/* <div className="mt-5 m-3 p-5" style={{ display: 'flex' , justifyContent: '' , zIndex: "10" }}> */}
              
              <div className="center col-md-3 col-5" style={{flexDirection:'column'}}>
                <h1 style={{ fontSize: "65px" }}>
                  20
                </h1>
                <p style={{color:'#B7B8B8'}}>Years of activity</p>
              </div>

              <div className="center col-md-3 col-5" style={{flexDirection:'column'}}>
                <h1 style={{ fontSize: "65px" }}>
                  10k
                </h1>
                <p style={{color:'#B7B8B8'}}>Happy customers</p>
              </div>

              <div className="center col-md-3 col-5" style={{flexDirection:'column'}}>
                <h1 style={{ fontSize: "65px" }}>
                  5
                </h1>
                <p style={{color:'#B7B8B8'}}>Awards won</p>
              </div>

              <div className="center col-md-3 col-5" style={{flexDirection:'column'}}>
                <h1 style={{ fontSize: "65px" }}>
                87
                </h1>
                <p style={{color:'#B7B8B8'}}>Employees</p>
              </div>

            {/* </div> */}
            </div>
        </div>
        </div>

      <Footer className={"color-white"}/>
    </div>
  );
}
