import React from 'react' 
import Test from './Test'
import Sidebar from './Sidebar'
import Header from './Header'
import Welcometxt from './Welcometxt'
import Userlist from './Userlist'
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Newtest from './Newtest'
import Test from './Test'
class Welcome extends React.Component{
  constructor(){
    super()
        this.state={
      flag:1,
    }
  }

  componentWillMount(){
    // console.log("inwelcome",this.props.everywhere)
    // console.log(this.props.location.state);
    var userdata=JSON.parse((localStorage.getItem("UserData")));
    console.log(userdata)
  }
  touserlist=()=>{
    var userdata=JSON.parse((localStorage.getItem("UserData")));
    console.log(userdata);
    


    this.props.history.push("/userlist",{userdata})
  }

  anyfun=()=>{
    console.log("anyfun wroking",this.state.flag)


//     if(this.state.flag==0){
//       return(
//         <div>
// // <Userlist state={JSON.parse((localStorage.getItem("UserData")))}/>
//     </div>

//       );
//     }else{
//       return(
//         <div>
//         <h1>Welcome</h1>
//         <button onClick={()=>this.setState({flag:0})}> Show User List</button>
//         </div>
//       );
//     }
    
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
  <div >

<Sidebar mydata={JSON.parse((localStorage.getItem("UserData")))} />
<Header mydata={JSON.parse((localStorage.getItem("UserData")))}/></div>
<div style={{marginLeft:"30%"}}>
<Router>
  <Route path="/welcome"  component={Test} ></Route>
  <Route path="/list" component={Userlist} ></Route>
</Router>

</div>
</div>
  );}
}
}
export default Welcome
