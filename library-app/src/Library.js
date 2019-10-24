import React from 'react';

class Library extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.onReadStatusChange(e.target.getAttribute('dataindex'));
  }

  render(){
    const myLibrary = this.props.myLibrary;

    const books = myLibrary.map((book, idx) =>

      <div className="book-item" key={idx}>
        <div 
        className="readLine"
        dataindex={idx}
        onClick={this.handleClick}>
        {book.read ? 'I\'ve read this' : 'Not read'}
        </div>
        <p>{book.title} by {book.author}, {book.pages} pages</p>
        <button className="remove">Remove</button>
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