import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {quotesData} from './Data/QuotesData'
import jwtDecode from 'jwt-decode'
function SideBar(props) {
   console.log("Props to sidebar ",props);
    const randomElement = quotesData[Math.floor(Math.random() * quotesData.length)];
    const randomElement1 = quotesData[Math.floor(Math.random() * quotesData.length)];
    const [name,setName]=useState();
    const [cat,setCat]=useState();
    useEffect(()=>{
       try{
     const jwt = localStorage.getItem('jwt')
     const {name :Username}=jwtDecode(jwt);
     console.log("User details",Username);
     setName(Username)
   }catch(ex){} 
},[])


      
    return (
        <Conatainer>
           <Name>
              
             Hello {name} <span>!!&#128400;</span>
          </Name>
          <Items>
                  <div><a onClick={props.clicked("60aa08ecfeac5b45a077f621")}>
                  <img src="images/coffee-cup.png"/>
                  <span >COFFEE</span>
                  </a></div>
                  <a onClick={props.clicked("60aa08f5feac5b45a077f622")}>
                  <img src="images/coffee.png"/>
                  <span>TEAS</span>
                  </a>
                  <a onClick={props.clicked("60aa03d395185414788a9d06")}>
                  <img src="images/spaguetti.png"/>
                  <span>NOODLES</span>
                  </a>


                  <a onClick={props.clicked("608f9803c0b3db168cda3983")}>
                  <img src="images/pizza.png"/>
                  <span>PIZZA</span>
                  </a>

                  <a onClick={props.clicked("60aa08b5feac5b45a077f620")}>
                  <img src="images/hamburger.png"/>
                  <span>BURGUR</span>
                  </a>
          </Items>  
            
        <Quotes>
         <h1><i>Friends Fact</i></h1>
          {
              randomElement
           }
           <hr/>
           {
              randomElement1
           }
           <hr/>
        </Quotes>

        </Conatainer>
    )
}

export default SideBar

const Name=styled.div`
font-family: 'Dancing Script', cursive;
font-size: xx-large;
text-align: center;
color: blue;
border-bottom:1px  solid lightgrey;
`
const Quotes=styled.div`
font-family: 'Dancing Script', cursive;
`

const Conatainer=styled.div`
 background:white;
 width:250px;
 height:100vh;
 border-right: 1px solid lightgrey;
 position: fixed;

`
const Items=styled.div`
padding-top:40px;
 display:grid;
 border-bottom:1px solid lightgrey;

  
 a{     
    display:grid;
 grid-template-columns:14% auto;
 padding: 5px 25px;
 border-radius: 0 100px 100px 0;
 cursor:pointer;
 align-items:center;
 margin-right:8px;
        img{
        height:50px;
          }

        span{
        font-size:15px;
        letter-spacing:1.42px;       
        padding-left:40px;
       
        }
   :hover{
       background:yellow;
       color:blue;
      }
    }
    
      
`