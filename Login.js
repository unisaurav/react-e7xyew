import React from 'react';
class Login extends React.Component{

  constructor(){
    super();
    this.state={
      username:"",
      password:"",
      LoginCred:null
    }
  }

  componentWillMount(){
    console.log("mount Login")
   var data=JSON.parse(localStorage.getItem("UserData"));
    console.log("fdas",data);
    this.setState({LoginCred:data});

  }
  usertxt=(ev)=>{
    this.setState({username:ev.target.value})
    // console.log(ev.target.value);
  }
  passtxt=(ev)=>{
    this.setState({password:ev.target.value})
    // console.log(ev.target.value);
  }

  validate=()=>{
    if(this.state.username==""){
      alert("Enter username");
      return;
    }if(this.state.password==""){
      alert("Enter password")
      return;
    }

  for(var i=0;i<this.state.LoginCred.length;i++){
    if(this.state.username==this.state.LoginCred[i].Username&&this.state.password==this.state.LoginCred[i].Password){
      console.log("Valid Details")
   var update=JSON.parse(localStorage.getItem("UserData"));
    update[i].LoginStatus=true;
    console.log(update);
    localStorage.setItem("UserData",JSON.stringify(update));
    console.log("local data update");
    this.props.history.push("/welcome",{username:this.state.LoginCred[i].Username});
    return;
    }
  }}


  render(){
    return(
      <div style={{display:"flex",flexDirection:"column", width:"50%"}}>
      <input onChange={this.usertxt}></input>
      <br />
      <input type="password" onChange={this.passtxt}></input>
      <br/>
      <button onClick={this.validate}>Login</button>

      </div>
    );
  }
}
export default Login;