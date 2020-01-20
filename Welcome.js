import React from 'react' 
import Test from './Test'
import Sidebar from './Sidebar'
import Header from './Header'
class Welcome extends React.Component{
  componentWillMount(){
    // console.log("inwelcome",this.props.everywhere)
    console.log(this.props.location.state);
    var userdata=JSON.parse((localStorage.getItem("UserData")));
    console.log(userdata)
  }
  touserlist=()=>{
    var userdata=JSON.parse((localStorage.getItem("UserData")));
    console.log(userdata);
    this.props.history.push("/userlist",{userdata})
  }

render(){
  var user={data:"hihi"};
      if(localStorage.getItem("UserIndex")=="null"){
      return(<div>NoAccess</div>);
    }else{
  return(
    // <div>Welcome {this.props.location.state.username}</div>

  //   <div style={{display:"flex",flexDirection:'row',backgroundColor:'green'}}>
  //   <div style={{backgroundColor:'lightblue' ,height:"200%",width:"20%"}}>
  //  < p style={{color:"red"}}> slkfjds</p>
  //   </div>
  //   <button onClick={this.touserlist}>click me </button>
  //   <p>kfjlds</p>
  //   <Test datafrom={user}/>

  //   </div>





  <div>
<Sidebar mydata={JSON.parse((localStorage.getItem("UserData")))} />
<Header mydata={JSON.parse((localStorage.getItem("UserData")))}/>
</div>
  );}
}
}
export default Welcome
