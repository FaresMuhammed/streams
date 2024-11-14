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
                                    Artificial Lift
                                </h1>
                                <p className="mb-lg-5 mb-5">
                                    Discover the power of Artificial Lift & cutting-edge testing gear in the dynamic world of oil & gas. Unleash the potential of wells with pumps, gas lift & precision monitoring, optimizing production & resource management to new heights!
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
                                src={"compound-balance-pump-jack.jpg"}
                                style={{
                                objectFit: "cover",
                                height: '50%'
                                }}
                            />
                                <h1 className="mb-4" style={{color: '#0F2647'}}>Compound Balancing Pumping Unit</h1>
                                <p style={{color :'#060606'}}>Compound Balancing Pumping Unit creates compound balancing equipment and combinesall the advantages of conventional beam pumping unit. At the same time, it reduces electricity usage when the minimum torque is reached.</p>
                        </div>
                    </div>
                    <div className="center flex-wrap p-3 col-12 col-lg-5 shadow rounded" style={{ color: "#EDEDED" }}>
                        <div>
                            <img  
                                className="w-100 mb-4"
                                src={"double-horsehead-pump-jack.jpg"}
                                style={{
                                objectFit: "cover",
                                height: '50%'
                                }}
                            />
                                <h1 className="mb-4" style={{color: '#0F2647'}}>Double-horsehead<br/> Beam</h1>
                                <p className="mb-5" style={{color :'#060606'}}>Double-horsehead pumping unit is based on the model of conventional type. It adopts special curve beam arm. It is one of the ten energy conservation pumping unit that China National Petrochemical Corp recommends.</p>
                        </div>
                    </div>
                    <div className="center flex-wrap p-3 col-12 col-lg-5 shadow rounded" style={{ color: "#EDEDED" }}>
                            <div>
                                <img  
                                    className="w-100 mb-4"
                                    src={"double-horsehead-nodding-donkey-min.jpg"}
                                    style={{
                                    objectFit: "cover",
                                    height: '50%'
                                    }}
                                />
                                    <h1 className="mb-4" style={{color: '#0F2647'}}>Preposition type Double-horsehead</h1>
                                    <p style={{color :'#060606'}}>Preposition type double-horsehead beam pumping unit is balanced with mounting horsehead on the back of walking beam, inside counterbalance and hanging balancing weight on the back-horse head. It displays simpler structure, easier ways of rebalancing and maintenance, smaller additional dynamic load, longer stroke length, less energy consumption, greater efficiency and longer service life.
                                    </p>
                            </div>
                    </div>
                <div className="center flex-wrap p-3 col-12 col-lg-5 shadow rounded" style={{ color: "#EDEDED" }}>
                        <div>
                            <img  
                                className="w-100 mb-4"
                                src={"diameter-adjust-moment-regulate-oil-well-pumping-unit.jpg"}
                                style={{
                                objectFit: "cover",
                                height: '50%'
                                }}
                            />
                                <h1 className="mb-4" style={{color: '#0F2647'}}>Diameter adjust moment regulate</h1>
                                <p style={{color :'#060606'}}>Diameter adjust moment regulate pumping unit has advantages of simpler structure, reliable working quality and convenient repairment. It is extremely suitable for extraction of low and medium viscosity petro and high-water content petro for horizontal well, inclined well and viscous crude well that are hard to extract in normal condition, it is able to extract with greater size of reducer, motor and less SPM.</p>
                        </div>
                </div>
            </div>
            
            <Footer/>
            </>
        )
    }