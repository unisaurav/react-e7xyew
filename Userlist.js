import React from 'react' 

class Userlist extends React.Component{
  constructor(){
    super()
    this.state={
      userdata:null
    }
  }

  componentWillMount(){
    // console.log(this.props.location);
    // console.log("prop in Userlist -",this.props.state);
    this.setState({userdata:JSON.parse(localStorage.getItem("UserData"))})
  }

  // userlistitr(){
  //   var data=[];
  //   var curuser=[];
  //   for(var i=0;i<this.props.location.state.userdata.length;i++){
   
  //       if(this.props.location.state.userdata[i].LoginStatus==false){
  //         data.push(this.props.location.state.userdata[i]);
  //       }else{
  //         curuser.push(this.props.location.state.userdata[i]);
  //       };
      
  //   }
  //   console.log(data);

  // }

  changecolor(index,data){

  console.log("index",index)
   var a;
  if(data.LoginStatus==true){

  a="Currently logged in user "+ data.Username+"'s Age is "+data.Age +" And Login Status is"+" "+data.LoginStatus
  }else{

 a=data.Username+"'s Age is "+data.Age +" And Login Status is"+" "+data.LoginStatus
  }

   console.log("index",a)
  alert(a)
    
}




render(){
  return(

    <div >

    {this.state.userdata.map((data,index)=>{
      if(data.LoginStatus==false){
    return(
    <div style={{display:'flex',flexDirection:'row',}}>
    <p>{data.Username}</p>
    <button onClick={()=>this.changecolor(index,data)}  style={{height:30,marginTop:15,marginLeft:10,float:'left'}}> view</button></div>);}
    else{
  return(
    <div style={{display:'flex',flexDirection:'row',}} >
    <p style={{color:'green'}}>{data.Username}</p>
    <button  style={{height:30,marginTop:15,marginLeft:10,alignText:'center'}} onClick={()=>this.changecolor(index,data)}> view</button>
    
    </div>);
    }
    
    })
    }
    </div>
  );
}
}
export default Userlist
