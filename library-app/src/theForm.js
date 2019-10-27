import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      pages: 0,
      read: false,
      errors: {
        title:false,
        author:false,
        pages:false
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const errors = this.state.errors;

    errors[name] = false;

    this.setState({
      [name]: value,
      errors: errors
    });
  }

  handleSubmit(event) {
      event.preventDefault();
      const { title, author, pages, read } = this.state;
      const newBook = {title, author, pages, read};
      const errors = this.state.errors;

      for (let [key, value] of Object.entries(newBook)) {
        if (!value) {
          errors[key] = true;
          this.setState({ 
            errors: errors,
          });
        } 
      }

      if (title && author && pages > 0) {
      this.props.onFormSubmit(newBook);
    }
  }

  render() {

    const errors = this.state.errors;

    return (
      <form onSubmit={this.handleSubmit} id="form" noValidate>
        <div className="form-field form-field-title">
          <label>Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={this.handleInputChange}
            className={
              errors.title ? 'error' : ''} 
            required />
          {errors.title ?
            <div className="error-msg">This field is required</div> :
            ''}
        </div>
        
        <div className="form-field form-field-author">
          <label>Author</label>
          <input
            id="author"
            name="author"
            type="text"
            onChange={this.handleInputChange}
            className={
              errors.author ? 'error' : ''} 
            required />
          {errors.author ?
            <div className="error-msg">This field is required</div> :
            ''}
        </div>
        <div className="form-field form-field-pages">
          <label>Pages</label>
          <input
            id="pages"
            name="pages"
            type="number"
            min="1"
            onChange={this.handleInputChange}
            className={
              errors.pages ? 'error' : ''} 
            required />
          {errors.pages ?
            <div className="error-msg">This field is required</div> :
            ''}
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