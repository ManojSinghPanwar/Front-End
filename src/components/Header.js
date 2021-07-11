import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HomeIcon from '@material-ui/icons/Home';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InfoIcon from '@material-ui/icons/Info';
import {Link, withRouter} from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import SignIn from '../SignIn'
import {API} from '../config'
import {isAuthenticated} from '../auth'
import jwtDecode from 'jwt-decode'
function Header(props) {
    const {cartFilter,setCartFilter}=props;
    const [dropdownOpen, setDropdownOpen] = useState(false);
    let ad;
    function checkAdmin(){
        try{
            const jwt = localStorage.getItem('jwt')
            const x=jwtDecode(jwt);
            console.log(x)
            const z =(x.Admin) && x.Admin==true?true:false;
            console.log("z", z);
            console.log("x.admin ",x.Admin)
            ad=z;
            console.log("User admin in Header file is ",ad)
          }catch(ex){} 
        console.log("check admin is called")
        if(ad==true)
        {
            console.log("value of ad",ad);
        return true
        }
        else
        {
            console.log("value of ad inside else ",ad);
            return false} 
        
    }
    

    const signout=(next)=>{
        if(typeof window!=="undefined"){
            localStorage.removeItem('jwt');
            next();
            return fetch(`${API}/user/signout`,{
                method:"Get",
            })
            .then(response=>{
                console.log('signout',response)
            })
            .catch(err=> console.log(err))
        }
    }
  
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
       
           <Wrapper>
              <Logo src="images/logo.svg"/>              
              <NavMenu>
                  <Ab>
                  <HomeIcon/>
                  <Link to='/Home'>
                  <span>HOME</span>
                  </Link>
                  </Ab>
                  <Ab>
                  <RateReviewIcon/>
                  <span>REVIEWS</span>
                  </Ab>
                  <Ab>
                  <ShoppingCartIcon/>
                  <Link to='/Bucket'>
                  <span>CART</span>
                  </Link>
                  </Ab>

                  <Ab>
                  <InfoIcon/>
                  <Link to='/about'>
                  <span>ABOUT</span>
                  </Link>
                  </Ab>

                  </NavMenu>

                  <RightHeader>
                  <SearchWrapper>
                    <SearchBarWrapper>
                    <SearchIcon/>
                       <input type="text" placeholder="Search Item"/>
                       <ExpandMoreIcon/>
                    </SearchBarWrapper>
                  </SearchWrapper>
                   <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
      <UserImg  src="https://freepngimg.com/download/toy_story/23419-4-toy-story-woody-clipart.png"/>
      
      </DropdownToggle>
      <DropdownMenu>
          {!isAuthenticated() && (<div> <Link to='/Signin'><DropdownItem>Sign In</DropdownItem></Link> 
          <DropdownItem divider /><Link to='/Signup'><DropdownItem>SignUp</DropdownItem></Link></div>)}
       
          {isAuthenticated() && (<div><DropdownItem divider />
        <DropdownItem  onClick={()=>signout(()=>{
            window.location='/home';
        })}>SignOut</DropdownItem> </div>)} 
        
        { checkAdmin() && (<div><DropdownItem divider />
            <Link to='/admin_dashboard'><DropdownItem>Admin</DropdownItem></Link>
            </div>)}


          <DropdownItem divider /><Link to='/dashboard'><DropdownItem>ME</DropdownItem></Link>
      </DropdownMenu>
    </Dropdown>
                   </RightHeader>
                  
           </Wrapper>
    )
}

export default Header

const Wrapper=styled.div`
width: 100%;
 position: fixed;
 display:grid;
 grid-template-columns: 120px auto 500px;
 height:70px;
 align-items:center;
 background: #090b13;
`
const Logo=styled.img`
width:100px;
margin-left:20px;
place-content:center;
`
const NavMenu=styled.div`
 height:45px;
 display:grid;
 grid-template-columns:repeat(4,100px);
 margin-left:20px;
 `
 const Ab=styled.div` 
     margin-left:20px;
      cursor: pointer;
     display:grid;
     place-items:center;
     grid-template-columns: 30% 70%;
     padding-left:20px;
     text-decoration: none;
     .MuiSvgIcon-root{
     
     color:white;
    }
     img{
         height:30px;
        }
        span{
         font-size:15px;
         color: white;
         letter-spacing:1.42px;
         padding-left:40px;
         position: relative;
         &:after{
             content:"";
             height:2px;
             background:white;
             position:absolute;
             left:0;
             right:0;
             bottom:-6px;
             opacity:0;
             transform-origin: left center;
             transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
             transform:scaleX(0.5);
            }
     }

     &:hover{
         span:after{
             transform:scaleX(1);
             opacity:1;
         }
     }

 
`
const UserImg=styled.img`
 width:70px;
 height:50px; 
 border-radius:50%;
 cursor: pointer;
 padding-left:20px;
`
const RightHeader=styled.div`
 display:grid;
 grid-template-columns: auto 30% ;
 place-items: center;
 
`
const SearchBarWrapper=styled.div`
 background-color:#f1f3f4;
 width:100%;
 max-width:750px;
 display:grid;
 grid-template-columns:10% auto 7%;
 place-items:center;
 height:45px;
 border-radius:6px;

 .MuiSvgIcon-root{
     color:#5f6368;
 }

  input{
      width:100%;
      height:30px;
      border:none;
      background:none;

      :focus{
     outline:none;
      }
  }  
`
const SearchWrapper=styled.div``
