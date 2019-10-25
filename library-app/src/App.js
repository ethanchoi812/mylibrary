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
    this.handleReadStatusChange = this.handleReadStatusChange.bind(this);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleToggleForm(event) {
    this.setState({ showForm: !this.state.showForm })
  }

  handleReadStatusChange(idx){
    const library = this.state.myLibrary;
    library[idx].read = !library[idx].read;

    this.setState({ myLibrary: library });
  }

  handleRemoveBook(idx){
    const library = this.state.myLibrary;
    library.splice(idx,1);

    this.setState({ myLibrary: library });
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
        <div id="display">
        <Library
          myLibrary={theLibrary}
          onReadStatusChange={this.handleReadStatusChange}
          onRemoveBook={this.handleRemoveBook}
        />
        </div>
      </div>
      );
    }
  }
   
export default App;
