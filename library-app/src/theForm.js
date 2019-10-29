import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      pages: '',
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

    if (name !== 'read'){
      errors[name] = false;
    }

    this.setState({
      [name]: value,
      errors: errors
    });
  }

  handleSubmit(event) {
      event.preventDefault();
      const { title, author, pages, read } = this.state;
      const newBook = {title, author, pages, read};
      const required = {title, author, pages}
      const errors = this.state.errors;

    for (let [key, value] of Object.entries(required)) {
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

     this.setState({
        title: '',
        author: '',
        pages: '',
        read: false
     });


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
            value={this.state.title} 
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
            value={this.state.author} 
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
            value={this.state.pages} 
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
            checked={this.state.read}
           />
        </div>
        <div className="add-btn-container">
          <button>Submit</button>
        </div>
      </form>);
  }
}

export default Form;