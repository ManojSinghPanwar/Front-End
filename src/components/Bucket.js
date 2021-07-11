import React from 'react'
import styled from 'styled-components';
function Bucket() {
    let total=0;
    let totalquant=0;
    let sn=1;
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log("data from local storage",cart);
    const backendimg='http://localhost:8000/'    
    function mdxy()
      {
          cart.map(mess=>{
          totalquant+=mess.quant    
          })
          return totalquant
      }
  
      function mdxx()
      {
        cart.map(mess=>{
          total+=mess.price    
          })
          return total
      }

    return (
        /*<>
           <div> 
          <Cards>
               {
                   
                 cart.map(mess=>(
                  <Card>
                  <img src={`${backendimg}${mess.photo}`}/>
                  <span>{`TITLE : ${mess.name}`}</span> 
                  <br/>
                  <span>{`Quantity : ${mess.quant}`}</span> 
                  <br/>
                  <span>{`PRICE : Rs ${mess.price}`}</span> 
                  <br/>
                  <br/>
                 
                  </Card>
                 ))
               }            
             </Cards>  
             </div>
        </>*/
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
      cart.map(mess=>(
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
export default Bucket
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
const Cards=styled.div`
 display:grid;
 grid-gap:45px;
 grid-template-columns: repeat(3,minmax(0,1fr));
 
`
const Card=styled.div`
text-align: center;
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


