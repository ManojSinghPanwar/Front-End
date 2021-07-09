
import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {Link, Redirect} from 'react-router-dom'
import {API} from './config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import axios from 'axios'
import jwtDecode from 'jwt-decode'

function SignIn()
{
    let isAdmin;
    let userisAuthenticated=false;
    const [role,setRole]=useState(true);
    const handleRole=()=>{
        setRole(!role) 
        console.log("Value of role",role);
    }
    
    const [value,setValue]=useState({
        email:'ManojPanwar@gmail.com',
        password:'123456789',
        error:'',
        loading:false,
        redirectToReferrer:false,
    })
    const { email, password,error,loading,redirectToReferrer } =value
   

    const authenticate =(dataa,next)=>{
        const {data} = dataa;
        const {token}=data
        if(typeof window !=='undefined'){
            console.log('data from user',token)
            localStorage.setItem('jwt',JSON.stringify(token))
            console.log("Inside local storage")
            next()
        }
    }

    const handleChange= name => event => {
      setValue({...value, error : false, [name] : event.target.value});
    };
    
    const clickSubmit= (event) =>{
        event.preventDefault()
        //validateFields({name,email,password})
        setValue({...value,error:false,loading:true})
        login({email,password}).then(data=>{
                if(data.error){
                    showError()
                    setValue({...value,error: data.error,loading:false})
                }else{
                    showLoading()
                    setValue({...value,redirectToReferrer:true})
                }
        })
        
      
    }

    const showError = ()=>{
        
        /*<div className="alert alert-danger" style={{display:error ? '':'none'}}> 
            {error}asdasdadas
        </div>*/
        console.log('error is called')
        return toast.error("All Fields are required");
    }

    const redirectUser=()=>{
        console.log('Hello11')
        if(redirectToReferrer){
            console.log('Hello')
            if(isAdmin){
                console.log('Hello1',isAdmin)
                return <Redirect to="/admin_dashboard"/>
            } else{
                console.log("Else is running",isAdmin)
                return <Redirect to="/dashboard"/>
            }
        }
    }
    
    const showLoading = ()=>{
       
              loading && (toast.info("Loading"));
         }

    const login =(user) =>{
        console.log("User detail", user); 
        return  fetch(`${API}User/Signin`,{
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-type":"application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response=>{
            return response.json()
        })
        .catch(err=>{
            console.log(err);
        })
    }
   
     const clickLog=async()=>{

       const promise= await axios.post(`${API}/User/Signin`,{email,password})
       console.log("Promise",promise);
       if(promise.error){
        showError()
        setValue({...value,error: promise.error,loading:false})
    }else{
        showLoading()
        authenticate(promise,()=>{
            setValue({...value,redirectToReferrer:true})
        }) 
        console.log("values",value);
        console.log("Admin:");
        try{
      const jwt = localStorage.getItem('jwt')
      const {Admin:userAdmin}=jwtDecode(jwt);
      console.log("Admin:",userAdmin)
      userisAuthenticated=true
      isAdmin=userAdmin;
      handleRole()
      console.log("value of role",role)
      return redirectUser()
        }catch(ex){
            console.log("Yo is me catch i am getting called ")
        }
    }
    }


    return (

        <div>
             <Container>
                <Box>
                    <Head>
                        SIGN IN
                    </Head>
                    <Body>
                        <Content>
                        Email:
                       <input type='text' onChange={handleChange('email')} type='text' placeholder='Email' value={email} required/>
                        </Content>
                        <Content>
                           Password:
                       <input type='Password' onChange={handleChange('password')} placeholder='Password' value={password} required/>     
                        </Content>
                        <Button>
                         <button type='submit' onClick={clickLog}>
                             Submit
                         </button>
                        </Button>
                        <Button>
                            <Link to='./SignUp'>
                            <button type='submit'>
                             SignUp
                         </button>
                            </Link>
                         </Button> 
                         {role && redirectUser()}                            
                    </Body>
                </Box>       
                <ToastContainer/>
                
        </Container>
        </div>
    )
}

export default SignIn;
const Container=styled.div`
  min-height: 100%;
  font-weight: 400;
  min-height: calc(100vh - 70px);
  overflow-x:hidden;
  display:grid;
  place-items:center;

  &:before{
         background: url(images/home-background.png);
         background-size:100%;
         //background: #1C8EF9 !important;
      content:"";
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      z-index: -1;
  }
`
const Box= styled.div`

background: white;
height:500px;
width:400px;
border: 2px solid lightgray;
border-radius:10px;
 `

 const Head=styled.div`
 margin-top:20px;
 display:grid;
 place-items:center;
 font-family: 'Roboto Slab', serif;
 font-size:30px;
 `
 const Body=styled.div`
  margin-top:50px;
  padding: 20px; 
 `
 const Content=styled.div`
  display:grid;
  grid-template-columns: 50px auto;
  padding:20px;
  font-family: 'Roboto Slab', serif;
  font-size:20px;
  input{
      margin-left:50px;
      border-radius:2px;
      border: 2px solid lightgrey;
      padding:5px;
  }
 `
 const Button=styled.div`
   display:grid;
   place-items:center;
   button{
       margin-top:20px;
       height:30px;
       width:90px;
       border-radius:5px;
       cursor: pointer;
       :hover{
           background: lightgrey; 
       }
   }
 ` 