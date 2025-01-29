import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
// import Loading from '......./Loading';
import { useNavigate, useParams } from 'react-router-dom'
import Cookie from "cookie-universal";
import axios from 'axios';
import Loading3 from '../Loading3/Loading3';


export default function Updatesubcategory() {


    const [Categeories , setCategeories] = useState([])


    useEffect(() => {
      axios
        .get(`https://backend.slsog.com/api/categories`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((data) => {
          setCategeories(data.data);
        })
        .catch((err) => err);
    }, []);
  
    const Show = Categeories.map( (cat ) => (
      <option value={cat.id}>{cat.title}</option>
    ) )
  

    const Nav = useNavigate()

    // To get id
   const {ID} =useParams()

    // Usestates for inputs
    const [Title , seTitle] = useState('')
    const [Category_id , setCategory_id] = useState('')

    const [Load , setLoad] = useState(false)

    const cookie = Cookie();
    const token = cookie.get("eng");

    // To get user data and put it in the inputs
    useEffect (() => {
        setLoad(true)
        axios
        .get(`https://backend.slsog.com/api/sub-categories/${ID}`, {
            headers: { Authorization: "Bearer " + token },
          })
          
        .then ( (data) => {
        seTitle(data.data.title)
        setLoad(false)
    })
    } , [] )
    console.log(Title);

    // Update function
    async function Handlesubmit(e) {
        setLoad(true)
        e.preventDefault()
        await axios
        .post(`http://backend.slsog.com/api/sub-categories/${ID}`,
            {title: Title , category_id: Category_id } ,
            {headers: { Authorization: "Bearer " + token },}  )
        window.location.pathname = '/dashboard/subcategories'
    }

    return (
            <>
                {Load && <Loading3/> }

                <Form onSubmit={Handlesubmit} className='bg-white w-100 mx-2 p-3'>
                <Form.Group className="mb-3" controlId="formBasicRole">
                    <Form.Label>Select category</Form.Label>
                    <Form.Select
                        name='category_id'
                        value={Category_id}
                        onChange={ (e) => setCategory_id(e.target.value) }
                    >
                        <option disabled value=''>Select Category</option>
                        {Show}
                    </Form.Select>
                </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNameee">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" 
                        value={Title}
                        onChange={ (e) => seTitle(e.target.value) }
                        />
                    </Form.Group>

                    <Button disabled={Title.length > 1  ? false : true } className='d-flex ' variant="primary" type="submit">
                        Update
                    </Button>

                </Form>
            </>
    )
}