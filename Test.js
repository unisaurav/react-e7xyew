import React from 'react'

class Test extends React.Component{
  render(){
    return(
      <div>data from {this.props.datafrom.data}</div>
    );
  }
}
export default Test;