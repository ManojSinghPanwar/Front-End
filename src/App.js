import './App.css';
import React,{useState, useEffect} from 'react'
import Header from './components/Header';
import axios from 'axios'
import {API} from './config'
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Home from './Home';
import PrivateRoute from './admin/PrivateRoute'
import Dashboard from './dashboard'
import AdminDashboard from './admin/admindashboard'
import "bootstrap/dist/css/bootstrap.css";
import styled from 'styled-components'
import Cart from './components/Cart';
import About from './components/About';
import Bucket from './components/Bucket';
function App() {

  const [message,setMessage]=useState();
  const [cartFilter,setCartFilter]=useState([]);
  useEffect(()=>{
    console.log('enter')
     axios.get(`${API}/Product/products`).then((response)=>{
       console.log('Enter inside axios')
       setMessage(response.data);
       console.log("Here is Movies data from appks",response.data)
      });
  },[]);
  console.log("out sidemessage ",message)
  console.log("cart Items",cartFilter)
  return (
    <div className="App">
      <Router>
        <Contain>
          <Top>
        <Header cartFilter={cartFilter} setCartFilter={setCartFilter}/>
        </Top>
        <Bottom>
        <Switch>
           <Route path='/SignIn'>
             <SignIn/>
           </Route>
           <Route path='/SignUp'>
             <SignUp/>
           </Route>
           <Route path='/Home'>
             <Home message={message} cartFilter={cartFilter} setCartFilter={setCartFilter}/>
           </Route>
           <Route path='/Bucket' >
             <Bucket/>
           </Route>
           <Route path='/about'>
             <About/>
           </Route>
           <PrivateRoute path='/dashboard' component={Dashboard}>
           </PrivateRoute>
           <PrivateRoute path='/admin_dashboard' component={AdminDashboard}>
           </PrivateRoute>
        </Switch>
        </Bottom>
        </Contain>
      </Router>
    </div>
  );
}

export default App;

const Contain=styled.div`
display: flex;
flex-direction: column;
`
const Top=styled.div`
width: 70px;
`
const Bottom=styled.div`
margin-top: 70px;
`
