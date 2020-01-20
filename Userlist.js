import React from 'react' 

class Userlist extends React.Component{
  componentWillMount(){
    console.log(this.props.location.state.userdata)
   this.userlistitr();
  }

  userlistitr(){
    var data=[];
    var curuser=[];
    for(var i=0;i<this.props.location.state.userdata.length;i++){
   
        if(this.props.location.state.userdata[i].LoginStatus==false){
          data.push(this.props.location.state.userdata[i]);
        }else{
          curuser.push(this.props.location.state.userdata[i]);
        };
      
    }
    console.log(data);

    // var a;
    // this.state.location.state.map((data,index)=>{
    //   <div>{data.username}</div>  
    // })
  }

render(){
  return(

    <div>
    {this.props.location.state.userdata.map((data,index)=>
    <div>
    <p>{data.Username}</p>
    <button> view</button></div>)}
   
    </div>
  );
}
}
export default Userlist
