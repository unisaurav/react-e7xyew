import React from 'react'

class Test extends React.Component{
  render(){
    return(
      <div><p>Welcome</p>
      <button onClick={()=>{this.props.history.push("/list")}}>get user list</button> 
      </div>
    );
  }
}
export default Test;