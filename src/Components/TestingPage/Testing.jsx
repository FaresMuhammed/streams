import { NavLink } from "react-router-dom";
import Footer from "../HomePage/Footer/Footer";



export default function Enhancing() {

        return(
            <>
                <div className="d-flex mb-2" style={{ flexDirection: "column" }}>
                    <div className="center flex-wrap p-md-5 p-2" style={{ position: "relative", color: "#EDEDED" }}>
                    <img
                        className="img11 blur w-100"
                        src={"nsplsh_47726d77566e5653536455~mv2_d_3626_2479_s_4_2.webp"}
                        style={{
                        position: "absolute",
                        top: "0",
                        zIndex: "-1",
                        objectFit: "cover",
                        }}
                    />
    
                        <div className=" d-flex flex-wrap mt-5">
                            <div className="col-lg-5 col-12 p-lg-5  mt-5">
                                <h1 className="mb-lg-5 mb-3" style={{ fontSize: "35px" }}>
                                Production
                                </h1>
                                <p className="mb-lg-5 mb-5">
                                    Streamlines Petroleum services is committed to maximizing the yield and efficiency of oil
                                    extraction processes. We offer comprehensive solutions tailored to meet your needs:<br/>
                                    Testing:
                                    Streamlines conducts thorough testing of production wells to assess reservoir
                                    characteristics, flow rates, fluid properties, and well integrity. This includes initial well
                                    testing, extended well testing, and well performance evaluation.
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