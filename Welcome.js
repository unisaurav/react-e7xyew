import React from 'react' 

class Welcome extends React.Component{
  componentWillMount(){
    console.log("inwelcome")
    console.log(this.props.location.state);

  }
  touserlist=()=>{
    var userdata=JSON.parse((localStorage.getItem("UserData")));
    console.log(userdata);
    this.props.history.push("/userlist",{userdata})

  }

render(){
  return(
    // <div>Welcome {this.props.location.state.username}</div>

    <div style={{display:"flex",flexDirection:'row',backgroundColor:'green'}}>
    <div style={{backgroundColor:'lightblue' ,height:"200%",width:"20%"}}>
   < p style={{color:"red"}}> slkfjds</p>
    </div>
    <button onClick={this.touserlist}>click me </button>
    <p>kfjlds</p>
    </div>
  );
}
}
export default Welcome
