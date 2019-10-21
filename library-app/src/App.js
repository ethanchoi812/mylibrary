import React from 'react';
import './App.css';

import NewBookBtn from './newBookBtn';
import Form from './theForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      myLibrary: []
    };

    this.handleToggleForm = this.handleToggleForm.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleToggleForm(event){
    this.setState({ showForm: !this.state.showForm })
  }
  render(){
    const showForm = this.state.showForm;
    const form = showForm ? 
      <Form /> :
    null

    return (
      <div className="App">
        <h1>My Library</h1>

        {/* Add new book button component*/}
        <NewBookBtn onToggleForm={this.handleToggleForm} />
        {/* Display books component*/}
        {form}
        <div id="display"></div> 
      </div>
      );
    }
  }
   
export default App;
