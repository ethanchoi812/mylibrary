import React from 'react';

class libraryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            pages: 0,
            readStatus: "Not read",
            readVal: "",
            readColor: "#ffbb00",

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(event) {
        event.preventDefault();
        addToLibrary(myLibrary);
        clearForm();

    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }


    addToLibrary(lib) {

        if (readval === true) {
            readStatus = 'I\'ve read it';
            readColor = '#00ffc3';
        } else {
            readStatus = 'Not read';
            readColor = '#ffbb00';
        }

        book = new Book(title, author, pages, readStatus, readColor);
        lib.push(book);
        return lib;
    };

    clearForm() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('pages').value = '';
        document.getElementById('read').checked = false;
    }

    render(){
        return(
        <form onSubmit={this.handleSubmit} id="form" style="display:none" novalidate>
                <label for="title">Title</label>
                <input
                  name="title"
                  type="text"
                  id="title"
                  value={this.state.value}
                  onChange={this.handleChange}
                  required />

                <label for="author">Author</label>
                <input
                  name="author"
                  type="text"
                  id="author"
                  value={this.state.value}
                  onChange={this.handleChange}
                  required />

                  <label for="pages">Number of Pages</label>
                    <input
                      name="pages"
                      type="number"
                      id="pages"
                      min="1" 
                      required />
                    
                    <label for="read">Have I read it?</label>
                    <input
                      name="read"
                      type="checkbox"
                      id="read" />

                    <input type="submit" value="Submit" />
            </form>
            );
        }
    }

    export default libraryForm;