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
                                Enhanced Oil Recovery - EOR
                                </h1>
                                <p className="mb-lg-5 mb-5">
                                    Streamlines provides advanced polymer technologies to improve the performance and
                                    economics of Oil & Gas extraction operations. Our solutions are designed to meet or exceed
                                    the needs of our customers in the Oil & Gas industry.
                                    In all Oil & Gas applications, Streamlines offers tailored polymers and equipment solutions
                                    from conceptual lab studies through to full-field operations. Our support services include: 
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
                                src={"LOGISTICS.png"}
                                style={{
                                objectFit: "cover",
                                height: '300px'
                                }}
                            />
                                <h1 className="mb-4 d-flex align-items-center" style={{color: '#0F2647'  , height: '60px'}}>Logistics & Chemical Supply </h1>
                                <p style={{color :'#060606' }}>
                                    Our expertise in polymer chemistry and
                                    engineering allows any polymer flood project to
                                    be completed in full with customized solutions.
                                    Due to the unique nature of each oilfield, we
                                    offer tailored polymer and equipment
                                    solutions, from conceptual studies through fullfield operations.
                                </p>
                        </div>
                    </div>

                    
                    <div className="center flex-wrap p-3 col-12 col-lg-5 shadow rounded" style={{ color: "#EDEDED" }}>
                    <div>
                        <img  
                            className="w-100 mb-4"
                            src={"LAB STUDY.jpg"}
                            style={{
                            objectFit: "cover",
                            height: '300px'
                        }}
                        />

                            <h1 className="mb-4 d-flex align-items-center" style={{color: '#0F2647' , height: '60px'}}>Laboratory Studies</h1>
                            <p style={{color :'#060606' }}>
                                        Our laboratory technicians work closely with
                                        local and interationato determine the best
                                        polymer to suit any oilfield application. From
                                        polymer selection at project start-up to quality
                                        assurance and quality control, Streamlines is
                                        able to ensure that the project runs smoothly.
                                    </p>
                    </div>
                </div> 

                <div className="center flex-wrap p-3 col-12 col-lg-5 shadow rounded" style={{ color: "#EDEDED" }}>
                        <div>
                            <img  
                                className="w-100 mb-4"
                                src={"Field-Operations.jpg"}
                                style={{
                                objectFit: "cover",
                                height: '300px'
                                }}
                            />
                          <h1 className="mb-4 d-flex align-items-center" style={{color: '#0F2647'  , height: '60px'}}>Field Operations</h1>
                                <p style={{color :'#060606' }}>Training, installation, commissioning, start-up,
                                    routine fluid testing, troubleshooting, and
                                    continued laboratory testing services are all
                                    available to our customers.
                                </p>
                        </div>
                </div>
            </div>
            
            <Footer/>
            </>
        )
    }