import React,{useState,useEffect} from 'react'
import jwtDecode from 'jwt-decode'
function Admindashboard() {

    const [value,setValue]=useState({
        email:'',
        name:"",
        Role:"",
    })

    useEffect(()=>{
       try{
     const jwt = localStorage.getItem('jwt')
     const {name :Username,Email:useremail,Admin:userAdmin}=jwtDecode(jwt);
     
        setValue({name: Username,email:useremail,Role:"Admin"})

   }catch(ex){} 
},[])

    return (
        <div title="Dashboard" descrption="User Dashboard">
            <div className="card mb-5">
               <h3 className="card-header">User Information<button className="btn btn-warning b">ADD</button></h3>
               <ul className="list-group">
                  <li className="list-group-item">Name : {value.name}</li>
                  <li className="list-group-item">Email : {value.email}</li>
                  <li className="list-group-item">Role : {value.Role}</li>
               </ul>
            </div>
            <div className="card">
              <h3 className="card-header">Purchase History</h3>
              <li className="list-group-item">History</li>
            </div>
        </div>
    )
}

export default Admindashboard
