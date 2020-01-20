import React from 'react'
import {Nav,Item,Link,ButtonToolbar,Button} from 'react-bootstrap'
import { Route , withRouter} from 'react-router-dom';

class Header extends React.Component{

  componentWillMount(){

    // localStorage.setItem("header",this.props.mydata);
    // console.log(

    // this.props.mydata[parseInt(localStorage.getItem("UserIndex"))].Username

    // )
  }

  Logout=()=>{
  localStorage.setItem("UserIndex",null);

  this.props.history.push('/login');
  }

  render(){
    if(localStorage.getItem("UserIndex")=="null"){
      return(<div>NoAccess</div>);
    }else{
    return(
<div style={{width:20,backgroundColor:'lightblue',width:'80%',height:50,padding:0,paddingTop:5,float:'right'}}>
      <h3 style={{float:"left",marginLeft:10}}>Welcome,{this.props.mydata[parseInt(localStorage.getItem("UserIndex"))].Username}</h3>
      <button style={{float:'right',marginTop:20,marginLeft:5}} onClick={this.Logout}>Logout</button>
     
      <p style={{float:'right',marginLeft:5}}>Age:{this.props.mydata[parseInt(localStorage.getItem("UserIndex"))].Age} </p>


    </div>

    );}
  }
}
export default withRouter (Header);
