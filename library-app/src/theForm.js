import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      pages: 0,
      read: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
      event.preventDefault();
      const { title, author, pages, read } = this.state;

      const newBook = {title, author, pages, read}

    if (title !== "" && author !== "" && pages !== ""){
      this.props.onFormSubmit(newBook)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="form" noValidate>
        <div className="form-field form-field-title">
          <label>Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={this.handleInputChange}
            required />
        </div>
        <div className="form-field form-field-author">
          <label>Author</label>
          <input
            id="author"
            name="author"
            type="text"
            onChange={this.handleInputChange}
            required />
        </div>
        <div className="form-field form-field-pages">
          <label>Pages</label>
          <input
            id="pages"
            name="pages"
            type="number"
            min="1"
            onChange={this.handleInputChange}
            required />
        </div>
        <div className="form-field form-field-read">
          <label>Have I read it?</label>
          <input
            type="checkbox"
            id="read"
            name="read"
            onChange={this.handleInputChange}
           />
        </div>
        <div className="add-btn-container">
          <button>Submit</button>
        </div>
      </form>);
  }
}

export default Form;