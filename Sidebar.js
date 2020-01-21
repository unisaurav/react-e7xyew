import React from 'react'
import {Link} from 'react-router-dom' 
class Sidebar extends React.Component{
  constructor(){
    super()

  }
  componentWillMount(){
    console.log("prop in sidebar",this.props.mydata)
  }

render(){
  return(
    <div style={{height:"100%",  position: "fixed",backgroundColor:"MediumSeaGreen",width:"20%",}}>
   <Link to={{pathname:"/userlist",state:{userdata:this.props.mydata}}}>
  <p style={{color:"white",textAlign:'center'}}> User List</p>
  </Link>
  <p style={{color:"white",textAlign:'center'}}> some other data</p>
</div>
  );
}
}
export default Sidebar;