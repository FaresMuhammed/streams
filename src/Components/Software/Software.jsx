import Footer from "../HomePage/Footer/Footer";
import { Link } from "react-router-dom";

export default function Software() {
    

    return(
        <>
        <div className="mt-5 ">
            <div className=" flex-wrap p-3 p-md-5 col-12 border-bottom" style={{ color: "#EDEDED" }}>
            <div className="ps">
                    <Link  to={"https://rfdyn.com/"} target="_blank">
                        <h1  className="sh  d-flex align-items-center mt-5" style={{ height: '60px'}}>tNavigator</h1>
                    </Link>
                    <p style={{color :'#060606' }}>A powerful simulation software that supports reservoir modeling, production forecasting,
                        and strategic field planning, tNavigator enables data-driven decisions with high accuracy.
                    </p>
                    <img  
                        className="w-100 mb-4"
                        src={"WhatsApp Image 2025-01-13 at 10.57.17_1e83157f.jpg"}
                            style={{
                            objectFit: "cover",
                            // height: '500px'
                        }}
                    />
                </div>
            </div>

            <div className=" flex-wrap p-3 p-md-5 col-12 border-bottom" style={{ color: "#EDEDED" }}>
                <div className="ps">
                    <Link  to={"https://www.peloton.com/"} target="_blank">
                        <h1  className="sh  d-flex align-items-center " style={{ height: '60px'}}>Peloton</h1>
                    </Link>
                    <p style={{color :'#060606' }}>The Peloton platform integrates real-time well and production management, enhancing
                        operational efficiency from drilling through production phases.
                        </p>
                    <img
                        className="w-100 mb-4"
                        src={"Introducing_WV_Allez (2).jpg"}
                            style={{
                            objectFit: "cover",
                            // height: '300px'
                        }}
                    />

            </div>
            </div>


            <div className=" flex-wrap  p-3 p-md-5 col-12  border-bottom" style={{ color: "#EDEDED" }}>
            <div className="ps">

                    <Link  to={"https://www.tachyus.com/"} target="_blank">
                        <h1  className="sh d-flex align-items-center" style={{ height: '60px'}}>Tachyus</h1>
                    </Link>
                    <p style={{color :'#060606' }}>Aurion offers a GHG emissions management solution that streamlines emissions reporting,
                                reduces carbon footprint, enhances efficiency, and ensures transparent and auditable
                                practices.
                        </p>
                    <img  
                        className="w-100 mb-4"
                        src={"1506097082-fd6b03607788541e45ff5289d9eed2865f4e4890fdeb930caaacd1ee054431be-d_1280.jpg"}
                            style={{
                            objectFit: "cover",
                            // height: '300px'
                        }}
                    />

            </div>
            </div>

            <div className=" flex-wrap p-3 p-md-5 col-12 border-bottom" style={{ color: "#EDEDED" }}>
            <div className="ps">

                    <Link  to={"https://www.wellirs.com/"} target="_blank">
                        <h1  className="sh d-flex align-items-center" style={{ height: '60px'}}>WelliRs</h1>
                    </Link>
                    <p style={{color :'#060606' }}>WelliRs provides a comprehensive well integrity management system to ensure safe and
                        compliant operations throughout the well lifecycle.
                    </p>
                    <img  
                        className="w-100 mb-4"
                        src={"WhatsApp Image 2025-01-13 at 10.57.32_66d6d248.jpg"}
                            style={{
                            objectFit: "cover",
                            // height: '300px'
                        }}
                    />

            </div>
            </div>


            <div className=" flex-wrap p-3 p-md-5 col-12 border-bottom" style={{ color: "#EDEDED" }}>
                <div className="ps">
                
                    <Link  to={"https://three60energy.com/"} target="_blank">
                        <h1  className="sh d-flex align-items-center" style={{ height: '60px'}}>Poseidon</h1>
                    </Link>
                    <p style={{color :'#060606' }}>Poseidon software facilitates data processing and analysis, providing an intuitive platform
                        for managing reservoirs and making informed decisions.
                        </p>
                    <img  
                        className="w-100 mb-4"
                        src={"WhatsApp Image 2025-01-13 at 12.21.34_4328126c.jpg"}
                            style={{
                            objectFit: "cover",
                            // height: '500px'
                        }}
                    />

            </div>
            </div>        
        </div>


        <Footer/>

        </>
    )
}