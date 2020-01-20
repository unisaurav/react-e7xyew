import React from 'react' 

class Userlist extends React.Component{
  componentWillMount(){
    console.log(this.props.location.state)
  }

  userlistitr(){
    var a;
    this.state.location.state.map((data,index)=>{
      <div>{data.username}</div>  
    })
  }

render(){
  return(

    <div>

    </div>
  );
}
}
export default Userlist
