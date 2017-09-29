import React, { Component } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';

class Displays extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      text: 'this is an h1\n=======\n\n# also this\n\nthis is an h2\n-----------\n \n ## this too\n\n### h3\n\n#### h4\n\n##### h5\n\n###### h6\n \na blank line is\ntwo enters.\n\n-------- \n\nText attributes *italic*, **bold**, \n`monospace`.\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears'
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
        <h1 className='title'>Markdown previewer</h1>
        <textarea 
          value={this.state.text}
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
