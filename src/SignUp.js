import React,{useState} from 'react'
import styled from 'styled-components'
import {API} from  './config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignUp() {
    const [value,setValue]=useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success:false
    })
    const {name, email, password,error,success } =value
   
    const handleChange= name => event => {
      setValue({...value, error : false, [name] : event.target.value});
    };
    
    const validateFields=(user)=>
    {
        
    }

    const clickSubmit= (event) =>{
        event.preventDefault()
        setValue({...value,error:false})
        validateFields({name,email,password})
        signup({name,email,password})
        .then(data=>{
                if(data.error){
                    showError()
                    setValue({...value,error: data.error,success:false})
                }else{
                    showSuccess()
                    setValue({...value,name:"",email:"",password:"",error:"",success:true})
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
    
    const showSuccess = ()=>{
       
       /* <div className="alert alert-info" style={{display:success ? '':'none'}}> 
            New Account is Created. Plzz Sign IN
        </div>*/
        console.log('success is called')
         toast.success("Success");
         }

    const signup = (user) =>{
         return fetch(`${API}/User/Signup`,{
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

    return (
        
        <Container>
            
                <Box>
                    <Head>
                        SIGN UP
                    </Head>
                    <Body>
                  
        
                        <Content>
                      
                        Name:
                       <input onChange={handleChange('name')} type='text' placeholder='Name' value={name} required/>
                        </Content>
                        <Content>
                        Email:
                       <input onChange={handleChange('email')} type='text' placeholder='Email' value={email} required/>
                        </Content>
                        
                        <Content>  
                           Password:
                       <input type='Password' placeholder='Password' required/>     
                        </Content>
                        <Content>
                          Confirm Password:
                       <input onChange={handleChange('password')} type='Password' placeholder='Password' value={password} required/>     
                        </Content>
                        <Button>
                         <button onClick={clickSubmit} type='submit'>
                             Submit
                         </button>
                        </Button>               
                    </Body>
                    {JSON.stringify(value)}
                </Box>       
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
               />
         </Container>
    )
}

export default SignUp

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
     height:30px;
     width:90px;
     border-radius:5px;
     cursor: pointer;
     :hover{
         background: lightgrey;
         
     }
 }
` 