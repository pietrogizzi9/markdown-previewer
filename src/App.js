import React, { Component } from 'react';
import './App.css';


class Displays extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      text: '',
    }
  }

  handleChange(e){
    var new_text = e.target.value;
    this.setState({
      text: new_text,
    })
  }

  render(){

    return ( 
      <div className='container'>
        <textarea 
          className='textarea'
          onChange={this.handleChange.bind(this)}
          cols='50'
          rows='20'
        ></textarea>
        <h1 className='display'>{this.state.text}</h1>
      </div>
      );
  }
}

class App extends Component {
  render() {
    return (
      <Displays/>
    );
  }
}

export default App;
