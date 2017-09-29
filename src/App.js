import React, { Component } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';

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
      <div class='container'>
        <textarea 
          className='textarea'
          onChange={this.handleChange.bind(this)}
          cols='50'
          rows='20'
        ></textarea>
        <ReactMarkdown className='display' source={this.state.text}/>
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
