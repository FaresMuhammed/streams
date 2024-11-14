import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Cookie from  'cookie-universal'
import { useEffect, useState } from "react";
// import Loading from "../../../Componants/Loading/Loading";
import axios from "axios";
import Loading from "../Components/Loading/Loading";
import Error403 from "./Error403/Error403";


export default function Requireauth({Allowedrole}) {

    const navigate = useNavigate()

    // To get token
    const cookie = Cookie()
    const token = cookie.get('eng')

    // To get user's data
    const [ User , setUser ] = useState('')

    useEffect ( () => {
        
        axios.get("https://backend.slsog.com/api/user", {
            headers: { Authorization: "Bearer " + token },
        })
        .then( (res) => setUser(res.data))
        .catch( () => navigate( '/login' , {replace: true}))
    } , [] )
    console.log(User);

    // To protect routes from access without login & any cookie edit from user
    return token ? (
            User === '' ?
            (<Loading/>)
            : Allowedrole.includes(User.role) ?
            (<Outlet/>) :
            (<Error403 role={User.role}/>)
        ) : 
        (<Navigate to={'/login'} replace={true}/> )
}