import React from 'react'

class Test extends React.Component{
  render(){
    return(
      <div><p>data from</p>
      <button onClick={()=>{this.props.history.push("/list")}}>fdsaf</button> 
      </div>
    );
  }
}
export default Test;