import React from 'react';
import './App.css';

import NewBookBtn from './newBookBtn';
import Form from './theForm';
import Library from './Library';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      myLibrary: []
    };

    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleToggleForm(event) {
    this.setState({ showForm: !this.state.showForm })
  }

  handleSubmit(newBook) {
    const library = this.state.myLibrary;
    let arr = [];
    arr.push(newBook);

    this.setState({myLibrary:library.concat(arr)});
  }

  render(){
    const showForm = this.state.showForm;
    const form = showForm ? 
      <Form onFormSubmit={this.handleSubmit} /> :
    null;
    
    const theLibrary = this.state.myLibrary;

    return (
      <div className="App">
        <h1>My Library</h1>
        <NewBookBtn onToggleForm={this.handleToggleForm} />
        {form}
        <Library myLibrary={theLibrary} />
      </div>
      );
    }
  }
   
export default App;
