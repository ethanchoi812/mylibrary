import React from 'react';

class Library extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleClick(e){
    this.props.onReadStatusChange(e.target.getAttribute('dataindex'));
  }

  handleRemove(e){
    this.props.onRemoveBook(e.target.getAttribute('dataindex'));
  }

  render(){
    const myLibrary = this.props.myLibrary;

    const books = myLibrary.map((book, idx) =>
      
      <div className={book.read ? "book-item have-read" : "book-item"} key={idx}>
        <div 
        className="readLine"
        dataindex={idx}
        onClick={this.handleClick}>
        {book.read ? 'I\'ve read this' : 'Not read'}
        </div>
        <div className="book-info">
          <p><span>{book.title}</span> by <span>{book.author}</span></p>
          <p><span>{book.pages}</span>pages</p>
        </div>
        <button 
        className="remove"
        dataindex={idx}
        onClick={this.handleRemove}>
          Remove
          </button>
      </div>
    );
    return(
      <div>
      {books}
      </div>
    )    
  }
};

export default Library;