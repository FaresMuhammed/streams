import { faComment, faPerson, faSave, faSquarePollVertical, faStar , faUserAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SingleCourse() {
    


    return(

        <>

        <div className="py-md-5 p-4 mt-5 d-flex flex-wrap gap-md-4">
            
            <div className="mt-5 p-md-5 p-3 border col-md-8 col-12">
                <h3 className="mb-4">How to teach an online course</h3>
                <div className="d-flex flex-wrap gap-5" style={{ display: 'flex' ,justifyContent: 'space-between'}}>
                    <div className="d-flex col-lg-6 col-12 gap-3">
                        <div className="d-flex gap-1 border-end ">
                            <FontAwesomeIcon icon={faUserCircle} color="#C5C5C5" fontSize={'40px'}/>
                            <h6 style={{color: '#7A7A7A' , paddingRight: '15px'}}>Teacher <br/>Streamlines</h6>
                        </div>
                        <div>
                            <h6 style={{color: '#7A7A7A'}}>Review</h6>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                                <FontAwesomeIcon icon={faStar} color="gold"/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center col-lg-4 col-12  gap-2 ">
                        <h4 className="m-0" style={{color: "gray",textDecoration: "line-through"}}>69$</h4>
                        <h2 className="m-0 text-danger">50$</h2>
                        <button className="btn btn-danger">BOOK NOW</button>
                    </div>
                </div>
                
                <img
                    src={'/course-2.jpg'}                    
                    style={{ objectFit: "cover" }}
                    className="rounded col-12 mt-5 mb-5"
                    alt="img"
                />

                <div className="d-flex flex-wrap gap-5 center">
                    <div className="d-flex gap-2 col-3" style={{ color: '#B0B0B0'}}>
                        <FontAwesomeIcon icon={faSquarePollVertical} fontSize={'20px'}/>
                        <h6>Overview</h6>
                    </div>
                    <div className="d-flex gap-2 col-3" style={{ color: '#B0B0B0'}}>
                        <FontAwesomeIcon icon={faUserAlt} fontSize={'20px'}/>
                        <h6> Instructor</h6>
                    </div>
                    <div className="d-flex gap-2 col-3" style={{ color: '#B0B0B0'}}>
                        <FontAwesomeIcon icon={faComment} fontSize={'20px'}/>
                        <h6>Reviews</h6>
                    </div>
                </div>
            </div>
            
            <div className="col-md-3 col-12 py-5 p-2 mt-5 border">
                <div className="mb-5">
                    <h4 className="mb-4">ALL COURSES</h4>
                    <p className="mb-2">Information Technology</p>
                    <p className="mb-2">Operations & Production</p>
                    <p className="mb-2">Process Engineering</p>
                    <p className="mb-2">Project Management</p>
                    <p className="mb-2">Project Academy</p>
                    <p className="mb-2">Passive Income</p>
                    <p className="mb-2">Teaching Online</p>
                </div>
                <div>
                    <h4 className="mb-4">Latest Courses</h4>
                    <p className="mb-1">Development Geology School I</p>
                        <h5 className="mb-4" style={{color: '#00D637'}}>Free</h5>
                    <p className="mb-1">Advanced Process Automation & Machine Learning Using Python Develop-</p>                        <h5 className="mb-4" style={{color: '#00D637'}}>Free</h5>

                    <p className="mb-1">Process Automation & Machine Learning Using Python Applied To Develop</p>                        <h5 className="mb-4" style={{color: '#00D637'}}>Free</h5>

                </div>



            </div>
        </div>
    </>

    )
}