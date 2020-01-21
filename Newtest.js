import React from 'react'

class Newtest extends React.Component{
  componentWillMount(){
    console.log(this.props.location)
  }
  render(){
    return(
      <div>magicman </div>
    );
  }
}
export default Newtest;