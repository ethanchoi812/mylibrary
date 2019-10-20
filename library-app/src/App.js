import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Library</h1>

      {/* Add new book button component*/}
      <newBookBtn />
      <theForm />
              {/* Display books component*/}
              <div id="display"></div> 
    </div>
  );
}
          
class newBookBtn extends React.Component {
  constructor(props){
    super(props);
    this.state = {showForm: false}
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event){
     this.setState({showForm: !this.state.showForm});
  }

  render(){
  return (
    <div id="newbook-btn-container">
      <button onClick={this.handleClick} value="Add New Book" />
    </div>
  )}
}        

class theForm extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      myLibrary: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){    
  return (
    /* Form component*/
    <form onSubmit={this.handleSubmit} id = "form" novalidate >
    <div class="form-field form-field-title">
      <label for="title">Title</label>
      <input type="text" id="title" name="title" required />
    </div>
    <div class="form-field form-field-author">
      <label for="author">Author</label>
      <input type="text" id="author" name="author" required />
    </div>
    <div class="form-field form-field-pages">
      <label for="pages">Number of Pages</label>
      <input type="number" id="pages" name="pages" min="1" required />
    </div>
    <div class="form-field form-field-read">
       <label for="read">Have I read it?</label>
       <input type="checkbox" id="read" name="read" />
    </div>
    <div class="add-btn-container">
      <button>Submit</button>
    </div>
  </form>
  )};
}
        
export default App;
