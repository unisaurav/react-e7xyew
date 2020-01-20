import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Login from './Login'
import Welcome from './Welcome'
import Userlist from './Userlist'
class Routerclass extends React.Component{

  constructor(){
    super();
    this.state={
       useralist:[
        {Username:"saurav",
        Password:"saurav@123",
        Age:21,
        LoginStatus:false},

        {Username:"pratik",
        Password:"pratik@123",
        Age:22,
        LoginStatus:false},

        {Username:"lavanya",
        Password:"lavanya@123",
        Age:22,
        LoginStatus:false},

        {Username:"adisap",
        Password:"saurav@123",
        Age:22,
        LoginStatus:false},

        {Username:"siddhesh",
        Password:"itwari@123",
        Age:21,
        LoginStatus:false},

        
      ]
    }
  }
  componentWillMount(){
    console.log("mount router")
  localStorage.setItem("UserData",JSON.stringify(this.state.useralist));

  }

  render(){
    return(
      <Router>
        <Route path="/" exact component={Login}></Route>
        <Route path="/welcome" component={Welcome}></Route>
       <Route path="/userlist" component={Userlist}></Route>
      </Router>
    );
  }
}
export default Routerclass;