import React, { Component } from 'react';


import Hello from './Hello';




class App extends Component {
   
  render() {
    //console.log('here'+this.state.loading)
    const arr=['button1','button2','button3','button4','button5','button6'];
    return (
      
      <ul>
        {arr.map((item,index)=>{
          return(
           <Btn key={index} value={arr[index]} /> 
          )
        })}
        
      </ul>
    );
  }
}
class Btn extends Component{
  constructor(){
    super();
    this.state={
      loading:false,
    }
  }

  getIt(){
    console.log(this.state.loading)
    this.setState({loading:!this.state.loading,})
    console.log(this.state.loading)

  }
  render(){
    return(
      <li>
        
        <button onClick={this.getIt.bind(this)}
          
          >
          <span>
          {this.state.loading?<Hello/>:null}
            </span>
          <span style={{ visibility: this.state.loading? 'hidden': 'visible'}}>{this.props.value}</span></button>
          <br/>
       </li> 
    );
  }
}


export default App;
