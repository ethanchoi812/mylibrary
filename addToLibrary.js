'use strict';

const e = React.createElement;

class addToLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myLibrary: [] };
  }

  renderLibrary(props) {
      const lib = props.myLibrary;

    return(
    lib.forEach(function (book, idx) {
        <div class="book-item" data-index="${idx}">
            <div class="readLine" style="background:${book.readColor}"onclick="toggleRead(${idx})">${book.readStatus}</div>
            <p>${book.info()}</p>
            <button class="remove" onclick="removeBook(${idx});">Remove</button>
        </div>;
    })
    );
};

  render() {
    if (this.state.myLibrary) {
      return '';
    }

    return e(
      'button',
      { onClick: () => this.setState({ myLibrary: props.library }) },
      'Add book'
    );
  }
}

const domContainer = document.querySelector('#display');
ReactDOM.render(e(addToLibrary), domContainer);