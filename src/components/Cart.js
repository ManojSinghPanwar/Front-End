import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { getCart } from '../cartHelper'
import {API} from '../config'
import axios from 'axios'
function Cart(props) {
    let total=0;
    let totalquant=0;
    let sn=1;
    const {cartFilter,setCartFilter}=props
    //const [items,setItems]=useState();
    /*useEffect(()=>{
      const it=getCart();
      setItems(getCart())
    },[])*/
    const backendimg='http://localhost:8000/'
    console.log("Cart get Cart",getCart());
    console.log("items ",cartFilter)
      function mdxy()
      {
          cartFilter.map(mess=>{
          totalquant+=mess.quant    
          })
          return totalquant
      }
  
      function mdxx()
      {
        cartFilter.map(mess=>{
          total+=mess.price    
          })
          return total
      }

    return (
     <div>
         <Container>
        <Box>
        <h1><strong>SHOPPING CART</strong></h1>
        <Items>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Img</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  {
      cartFilter.map(mess=>(
        <tbody>
        <tr>
          <th scope="row">{sn++}</th>
          <td> <img style={{width:"20px"},{height:"50px"}} src={`${backendimg}${mess.photo}`}/></td>
          <td>{mess.name}</td>
          <td>{mess.price}</td>
          <td>{mess.quant}</td>
        </tr>
      </tbody>
      ))
  }
</table>
        </Items>
        </Box>
        <SecondBox>
            <h1><strong>Grand Total</strong></h1>
            <hr/>
            Total Price : 
            {"  "+mdxx()}
            <hr/>
            Total Quantity :
            {"  "+mdxy()}
        </SecondBox>
         </Container>
     </div>
    )
}

export default Cart
const SecondBox=styled.div`
text-align: center;
height: 200px;
width: 1000px;
margin-top: 20px;
margin-bottom: 20px;
background-color: lightgray;
`
const Img=styled.div`
height: 10px;
width: 10px;
img{
    height: 1px;
width: 1px;
}
`
const Row=styled.div``
const Items=styled.div`
overflow: hidden;
`

const Container=styled.div`
background-color: white;
 min-height: 100%;
  font-weight: 400;
  min-height: calc(100vh - 70px);
  overflow-x:hidden;
  display:grid;
  place-items:center;
`
const Box= styled.div`
background: lightgrey;
height:auto;
width:1000px;
border: 2px solid lightgray;
border-radius:10px;
text-align: center;
 `