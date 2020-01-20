import React from 'react'
import {Link} from 'react-router-dom' 
class Sidebar extends React.Component{
  constructor(){
    super()

  }

render(){
  return(
    <div style={{height:"100%",  position: "fixed",backgroundColor:"MediumSeaGreen",width:"20%",}}>
   <Link to={"/userlist"}>
  <p style={{color:"white",textAlign:'center'}}> somedata</p>
  </Link>
  <p style={{color:"white",textAlign:'center'}}> some other data</p>
</div>
  );
}
}
export default Sidebar;