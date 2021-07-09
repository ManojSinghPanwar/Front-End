import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import SideBar from './components/SideBar';
import Body from './components/Body';
import Pagination from './components/Pagination'
function Home(props) {
  const {message,cartFilter,setCartFilter}=props
  const [cat,setCat]=useState();
  function clickHandler(val)
  {     setCat(val);
     console.log(val," Button is Clicked");
  }
  
  console.log("message from app to home",props.message)

    return (
        <Container>
          <SideBar clicked={val=>clickHandler.bind(this,val)}/>
          <Body message={message} clicked={cat}  cartFilter={cartFilter} setCartFilter={setCartFilter}/>
        </Container>
    )
}

export default Home
const Container= styled.div`

`
