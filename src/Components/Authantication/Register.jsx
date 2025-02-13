import { useEffect, useRef, useState } from "react"
import Cookie from  'cookie-universal'
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading/Loading";


export default function Register() {

  const Ref = useRef()
  useEffect( ()=> {
    Ref.current.focus()
  } , [] )
  
  const navigate = useNavigate()

  const cookie = Cookie()

  // useStates
  const [Formm , setFormm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    password:'',
    password_confirmation: ''
  })

  const [Error , setError] = useState('')

  const [loading , setloading] = useState(false)

  // Functions
  function Handlechange(e) {
    setFormm({...Formm , [e.target.name]: e.target.value})
  }

  async function Handlesubmit(e) {
    e.preventDefault();
    setloading(true)

    try{
      const res = await axios.post( 'https://backend.slsog.com/api/register' , Formm)
      setloading(false) 
      const token = res.data.data.token
      cookie.set('eng' , token)
      navigate('/login')
    }

    catch (err) {
      console.log(err);
      setloading(false)
      if (err.response.status === 422) {
        setError( <div className="center "> Email is already registered </div>)
      }else{
        setError('Internal Server Error')
      }
    }
  }


  return (
    <>
          {loading && <Loading />}
    
    <div className='d-flex flex-wrap' style={{ backgroundColor: '#F7F7F7'  }}>
    <Link to={'/'} className="home-btn">
          <button className="p-1 btn btn-primary">
              <FontAwesomeIcon icon={faArrowCircleLeft} style={{marginRight: '5px'}}/>
              Home page
          </button>
        </Link>
        <div className='center col-lg-3 col-12'>
            <img src={'/Streamlines-logo-without-background.png'} className='mt-2 mb-3 st' />
        </div>
      <div className="center mb-5 col-lg-9 col-12">
        <Form className="form mt-lg-4" onSubmit={Handlesubmit} style={{position: 'relative' , backgroundColor: 'white'}}>
          <div className="center">
            <div className="custom-form">
              <h1 className="h1 mb-5"> Register </h1>

              <Form.Group className="form-custom" style={{marginBottom: '40px'}}>
                <label>Name</label>
                <Form.Control id='name' type='text' placeholder='Enter your name...'
                name="name"
                value={Formm.name}
                onChange={Handlechange}
                required
                ref={Ref}
                />
              </Form.Group>

              <Form.Group className="form-custom"  style={{marginBottom: '40px'}} >
                <label>Email </label>
                <Form.Control id='email' type='email' placeholder='Enter your email...'
                name="email"
                value={Formm.email}
                onChange={Handlechange}
                required
                />
              </Form.Group>            

              <Form.Group className="form-custom"  style={{marginBottom: '40px'}}>
                <label>Phone number </label>
                <Form.Control id='phone' type='number' placeholder='Enter your phone number...'
                name="phone"
                value={Formm.phone}
                onChange={Handlechange}
                required
                />
              </Form.Group>

              <Form.Group className="form-custom"  style={{marginBottom: '40px'}}>
                  <label>Company(optional)</label>

                <Form.Control id='company' type='text' placeholder='Enter your company...'
                name="company"
                value={Formm.company}
                onChange={Handlechange}
                />
              </Form.Group>


              <Form.Group className="form-custom"  style={{marginBottom: '40px'}}>
                <label>Password </label>
                <Form.Control id='password' type='password' placeholder='Enter your password'
                name="password"
                value={Formm.password}
                onChange={Handlechange}
                required
                />
              </Form.Group>

              <Form.Group className="form-custom"  style={{marginBottom: '15px'}}>
                <label>Confirm password </label>
                <Form.Control id='password_confirmation' type='password' placeholder='Confirm your password'
                name="password_confirmation"
                value={Formm.password_confirmation}
                onChange={Handlechange}
                required
                />
              </Form.Group>

              {Error !== '' && <span>{Error}</span>}
                <div className="center ">
                  <button className="btn btn-primary mt-3" type='submit'>Register</button>
                </div>
              
            </div>
          </div>
        </Form>
      </div>
    </div>
  </>
  )
}
