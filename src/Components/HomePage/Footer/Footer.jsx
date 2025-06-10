import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className={`d-flex justify-content-center flex-wrap`} style={{backgroundColor: '#152C49'}}>

      <div
        className="col-lg-4 col-12 mt-5 p-md-5 p-4 border-bottom "
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h6
          className={`mb-5 ${props.className}`}
          style={{ fontSize: "18px"  , color: 'white'}}
        >
          HEAD OFFICE
        </h6>
        <p className={`mb-3 mb-0   ${props.className}`} style={{ fontSize: "14px" ,  color:'white'}}>
          9235/8 Adly El-Melegy
          Al Abageyah, El Mokattam, Cairo Governorate, 11571 , Egypt
        </p>
        <iframe className="w-100"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d838.2727696282406!2d31.308242872327753!3d30.00707970779725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x879c433d660a811d%3A0x37188bdbf0cc48be!2sStreamlines!5e1!3m2!1sar!2seg!4v1734550968040!5m2!1sar!2seg" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>


      <div
        className="col-lg-4 col-12 mt-5 p-md-5 p-4 border-bottom  "
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h6
          className={`mb-5  Link22  ${props.className}`}
          style={{fontSize: "18px" }}
        >
          SOCIALS
        </h6>
        <Link to={'https://www.facebook.com/streamlinesEnergy/'} target="_blank"
          className={` mb-0 py-4 ln ${props.className}`}
          style={{ fontSize: "14px" , textDecoration: 'none' ,  color:'white' }}>
            <div className="d-flex gap-2">
              <span className="icon-facebook" style={{fontSize: '22px'}}></span>
              <p>Facebook</p>
            </div>
        </Link>
        <Link to={'https://www.linkedin.com/company/streamlinestraining/'}  target="_blank"
          className={` mb-0  py-4 ln ${props.className}`}
          style={{ fontSize: "14px"  , textDecoration: 'none' ,  color:'white' }}
        >
            <div className="d-flex gap-2">
              <span className="icon-linkedin" style={{fontSize: '22px'}}></span>
              <p>LinkedIn</p>
            </div>         
        </Link>

        <Link to={'https://wa.me/+201274953659'}  target="_blank"
          className={` mb-0  py-4 ln ${props.className}`}
          style={{ fontSize: "14px"  , textDecoration: 'none' ,  color:'white' }}
        >
        <div 
          className={` mb-0  py-4 ln ${props.className}`}
          style={{ fontSize: "14px"  , textDecoration: 'none' ,  color:'white' ,  marginTop: '-30px'}}
        >
            <div className="d-flex gap-2">
              <span className="icon-whatsapp" style={{fontSize: '22px'}}></span>
              <p>Whatsapp</p>
            </div>        
          </div>
          </Link>

      </div>

      <div
        className="col-lg-4 col-12 mt-5 p-md-5 p-4 "
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h6
          className={`mb-5 Link22  ${props.className}`}
          style={{ fontSize: "18px" ,  color:'white'}}
        >
          INQUIRIES
        </h6>

        <Link
          to={"/contactus"}
          className={`mb-5 py-4 ln ${props.className}`}
          style={{ fontSize: "14px" , color:'white' }}
        >
          Become a subcontractor
        </Link>
      </div>
    </div>
  );
}
