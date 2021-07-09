import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import Pagination from './Pagination'
import axios from 'axios'
import {API} from '../config'
import {addItem} from '../cartHelper'
import {Link} from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function Body(props) {
  const {message}=props;
  const {clicked}=props;
  const [cartFilter,setCartFilter]=useState([]);
  console.log("message in body",message)
  const [count,setCount]= useState(40);
    const [pageSize] = useState(2);
    const [currentPage,setCurrentPage]=useState(1);
     
    const backendimg='http://localhost:8000/'
    const[currentClicked,setCurrentClicked]=useState();
    console.log(clicked, "something is send to body")
    
      const addToCart= (product)=>{
        const exist = cartFilter.find((x) => x._id === product._id);
        if (exist) {
          setCartFilter(
            cartFilter.map((x) =>
              x._id === product._id ? { ...exist, quant: exist.quant + 1 } : x
            )
          );
          localStorage.setItem("cart",cartFilter);
        } else {
          setCartFilter([...cartFilter, { ...product, quant: 1 }]);
        }
       /*(setCartFilter(message.filter(m=>m._id===id));
        console.log("cart filter value", cartFilter);
        addItem(cartFilter,()=>{
          console.log("Added to Cart");
        })*/
      }
      console.log("Items in the cart" ,cartFilter);
      const filtered= clicked ? message.filter(m =>m.category ===clicked):message;
      
    function countItem()
    {
      console.log("Entered inside filtered")
       setCount(filtered.length)
    }

    const handlePageChange = page=>{
        setCurrentPage(page);
    }
    return (
        <Container>
          <div> 
          <Cards>
               {
                 filtered.map(mess=>(
                  <Card>
                  <img src={`${backendimg}${mess.photo}`}/>
                  <span>{`TITLE : ${mess.name}`}</span> 
                  <br/>
                  <span>{`DESCRIPTION : ${mess.description}`}</span> 
                  <br/>
                  <span>{`PRICE : Rs ${mess.price}`}</span> 
                  <br/>
                  <br/>
                  <Change>
                    {setCurrentClicked}
                     <button onClick={()=>addToCart(mess)} className="btn btn-success">ADD<AddIcon/></button>    
                  </Change>
                  </Card>
                 ))
               }
                  
            
             </Cards>  
             <Pagination currentPage ={currentPage}itemCount={countItem} pageSize={pageSize} onPageChange={handlePageChange}/>           
          </div>

               
           </Container>
           
    )
}

export default Body;
const Change=styled.div`
 display: grid;
 place-items: center;
 
 
`
const Cards=styled.div`
 display:grid;
 grid-gap:45px;
 grid-template-columns: repeat(3,minmax(0,1fr));
 
`
const Card=styled.div`
width: 300px;
height: 550px;
margin: 20px;
border: 1px solid black;
position: center;
padding-left: 10px;
padding-right:10px ;
border-radius: 5px;
background-color: white;
img{
  padding-top: 10px;
  height:40%;
  width: 100%;
  padding-bottom: 10px;
}
box-shadow: rgb(0 0 0 / 69% ) 0px 26px 30px -10px,
     rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
     transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
     &:hover{
      transform: scale(1.05);
      box-shadow: rgb(0 0 0 / 80% ) 0px 40px 58px -16px,
     rgb(0 0 0 / 72% ) 0px 30px 22px -10px;
      border: 3px solid rgba(249,249,249, 0.8);
  }
`
const Container=styled.div`
 margin-left: 270px;

 &:before{
      background: url("/images/home-background.png") center center / cover 
       fixed;
      content:"";
      position:fixed;
      top:0;
      left:0;
      right:0;
      bottom:0;
      z-index: -1;

  }

`
const Img=styled.div`

`
const TopWrapper=styled.div`
`
const EmailContainer=styled.div``

const Content= styled.div`

`
