import Footer from "../HomePage/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import Form from 'react-bootstrap/Form';

export default function ContactUs() {
    

    return(
        <>
        <div className="d-flex flex-wrap" style={{backgroundColor: '#091929'}}>
            <div className="center flex-wrap p-md-5 p-3" style={{position: 'relative'  , color: '#EDEDED'}}>  
                <div className="mt-5 d-flex flex-wrap">
    
                    <div className="col-lg-6 col-12 p-md-5 p-1 mt-5 mb-5 ">
                        <h1 className="mb-md-5 mb-3 " style={{fontSize: '40px' , fontWeight: 'bold'}}>
                            Contact 
                        </h1>
                            
                        <p className="mb-md-5 mb-5 mb-3" style={{fontSize: '17px'}}>
                            If you would like to learn more about tNavigator or request a demo license of our software, please fill in the contact form and one of our team will get in touch with you.
                        </p>
                        <div className="py-md-5 ">
                            <h6 className="mb-md-3">
                                TECHNICAL SUPPORT
                            </h6>
                            <div className="d-flex align-items-center gap-2 mb-md-5 mb-3"> 
                                <FontAwesomeIcon className="rounded-pill" icon={faMailBulk} style={{color: '#277EC3' , fontSize: '25px', border: '1px solid #277EC3' , padding: '10px'}}/>
                                faresmuhammed75@gmail.com
                            </div>
                            <h6 className="mb-md-3">
                                SALES ENQUIRIES
                            </h6>
                            <div className="d-flex align-items-center gap-2"> 
                                <FontAwesomeIcon className="rounded-pill" icon={faMailBulk} style={{color: '#277EC3' , fontSize: '25px', border: '1px solid #277EC3' , padding: '10px'}}/>
                                faresmuhammed75@gmail.com
                            </div>
                        </div>

                    </div>
        
        
                    <div className="col-lg-6 col-12 mb-5 mt-5">
                        <Form>
                            <div className="p-md-5 p-1">
                                <h4 className="mb-md-5 mb-5"> Send us a message: </h4>
                                <Form.Group className="form-custom mb-5">
                                    <Form.Label htmlFor='name'>FULL NAME:</Form.Label>
                                    <Form.Control className="p-3" id='name' type='text' placeholder='Please enter your full name...'/>
                                </Form.Group>
                                <Form.Group className="form-custom mb-5">
                                    <Form.Label htmlFor='name'>COUNTRY:</Form.Label>
                                    <Form.Control className="p-3" id='name' type='text' placeholder='Please enter your country...'/>
                                </Form.Group>
                                <Form.Group className="form-custom mb-5">
                                    <Form.Label htmlFor='name'>EMAIL ADDRESS:</Form.Label>
                                    <Form.Control className="p-3" id='name' type='text' placeholder='Please enter your email address...'/>
                                </Form.Group>
                                <Form.Group className="form-custom mb-5">
                                    <Form.Label htmlFor='name'>PHONE NUMBER:</Form.Label>
                                    <Form.Control className="p-3" id='name' type='text' placeholder='Please enter your phone number...'/>
                                </Form.Group>
                                <Form.Group className="form-custom mb-5">
                                    <Form.Label htmlFor='name'>YOUR MESSAGE:                                           </Form.Label>
                                    <Form.Control className="p-5" id='name' type='text' placeholder='Please enter your message...'/>
                                </Form.Group>

                                <button className="btn btn-primary center w-100 p-2" type='submit'>Submit</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>


        </div>
                    <div>        
                    <Footer  
                    // className={"color-white"}
                    />
                </div>
                </>
    )
}