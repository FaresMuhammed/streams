import { NavLink } from "react-router-dom";
import Footer from "../HomePage/Footer/Footer";



export default function Enhancing() {

        return(
            <>
                <div className="d-flex mb-2 mt-5" style={{ flexDirection: "column" }}>
                    <div className="center flex-wrap p-md-5 p-2 mt-5" style={{ position: "relative", color: "#EDEDED" }}>
                    <img
                        className="img11 blurr w-100"
                        src={"oil-and-gas-inspections-AJC-18.jpg"}
                        style={{
                        position: "absolute",
                        top: "0",
                        zIndex: "1",
                        objectFit: "cover",
                        }}
                    />
                    <div
                        className="position-absolute top-0 start-0 bg-black w-100 "
                        style={{ zIndex: "5", opacity: "0.3", height: "100%" }}
                    ></div>
    
                        <div className=" d-flex flex-wrap mt-5" style={{zIndex: '10'}}>
                            <div className="col-lg-5 col-12 p-lg-5  mt-5">
                                <h1 className="mb-lg-5 mb-3" style={{ fontSize: "35px" }}>
                                Production Well Testing
                                </h1>
                                <p className="mb-lg-5 mb-5">
                                    Testing: Streamlines provides extensive production well testing services aimed at delivering precise data to enhance well productivity and efficiency. We perform thorough assessments of pressure, temperature, and flow to ensure optimal well performance and reliability.
                                </p>
                                <NavLink to={'/contactus'}>
                                    <button className="p-2 mb-5 " style={{border: 'none' , backgroundColor: '#BD2C2C' , color: 'white' , borderRadius: '5px'}}>Contact us</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="center flex-wrap p-5 gap-5 ">
    
                    <div className="center flex-wrap p-3 col-12 col-lg-5 shadow rounded" style={{ color: "#EDEDED" }}>
                        <div>
                            <img  
                                className="w-100 mb-4"
                                src={"floemeter.jpg"}
                                style={{
                                objectFit: "cover",
                                height: '300px'
                                }}
                            />
                                <h1 className="mb-4 d-flex align-items-center" style={{color: '#0F2647'  , height: '60px'}}>Single phase flowmeter – SPFM                                </h1>
                                <p style={{color :'#060606' }}>
                                    Introducing our clamp meter – the smart
                                    solution for accurate current measurements
                                    with- out circuit interruption. Choose from
                                    Load Current or Leakage Current models,
                                    covering AC/DC and various methods.
                                    Discover a new era of effortless and safe
                                    measurements. 
                                </p>
                        </div>
                    </div>

                    
                    <div className="center flex-wrap p-3 col-12 col-lg-5 shadow rounded" style={{ color: "#EDEDED" }}>
                    <div>
                        <img  
                            className="w-100 mb-4"
                            src={"multiphase.png"}
                            style={{
                            objectFit: "cover",
                            height: '300px'
                        }}
                        />

                            <h1 className="mb-4 d-flex align-items-center" style={{color: '#0F2647' , height: '60px'}}>Multi phase flowmeter – MPFM    </h1>
                            <p style={{color :'#060606' }}>
                                Our MPFM represents are most widely
                                deployed and cost effective MPFM solution.
                                The single range MPFM is versatile. It can be
                                deployed both onshore and offshore. It can
                                also be vehicle mounted for mobile well
                                testing applications.
                                    </p>
                    </div>
                </div> 

                <div className="center flex-wrap p-3 col-12 col-lg-5 shadow rounded" style={{ color: "#EDEDED" }}>
                        <div>
                            <img  
                                className="w-100 mb-4"
                                src={"echometer.png"}
                                style={{
                                objectFit: "cover",
                                height: '300px'
                                }}
                            />
                          <h1 className="mb-4 d-flex align-items-center" style={{color: '#0F2647'  , height: '60px'}}>Echometer</h1>
                                <p style={{color :'#060606' }}>Training, installation, commissioning, start-up,
                                    Experience unmatched accuracy in in-depth
                                    assessment with Echometer. Using cuttingedge echo-based technology, this compact
                                    device delivers instant, reliable
                                    measurements for both water and
                                    underground applications.
                                </p>
                        </div>
                </div>
            </div>
            
            <Footer/>
            </>
        )
    }