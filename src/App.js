import React, { Component } from 'react';


import Hello from './Hello';




class App extends Component {
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
  
  
 
  render() {
    console.log('here'+this.state.loading)
    return (
      
      <div>
        {this.state.loading?<Hello/>:null}
      <button onClick={this.getIt.bind(this)} 
      style={{ visibility: this.state.loading? 'hidden': 'visible'}}
      >click here</button>
      </div>
    );
  }
}

export default App;
