let myLibrary = [];

const book = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

myLibrary.push(book);

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addToLibrary(){
    let book = new Book();
    myLibrary.push(book);
    return myLibrary;
}

function render(){
    let displayDiv = document.getElementById('display');

    myLibrary.forEach(function(book){
        displayDiv.innerHTML = `<p>${book.info()}</p>`;
    });
}

window.onload(render());