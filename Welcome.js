import React from 'react' 

class Welcome extends React.Component{
  componentWillMount(){
    console.log("inwelcome")
    console.log(this.props.location.state);

  }
render(){
  return(
    <div>Welcome {this.props.location.state.username}</div>
  );
}
}
export default Welcome
