
let myLibrary = [];

document.getElementById('newbook').addEventListener("click", newBook);

document.getElementById('form').addEventListener("submit", function(){
    event.preventDefault();

    addToLibrary(myLibrary);
    //render(myLibrary);

    render(myLibrary);

});




function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
};


function newBook(){
    let showForm = document.getElementById('form').style;
    showForm.display === 'none' ? showForm.display = 'block' : showForm.display = 'none';
};


function addToLibrary(lib){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read;
    
    document.getElementById('read').checked === true ?
    read = 'I\'ve read this!' : read = 'I\'ve not read this yet';

    let book = new Book(title, author, pages, read);
    lib.push(book);
    console.log(myLibrary);
    return lib;
};

function removeBook(idx){
   myLibrary.splice(idx, 1);
   render(myLibrary);
}


function render(lib){
    let displayDiv = document.getElementById('display');
    displayDiv.innerHTML = "";
    //console.log(lib);

    lib.forEach(function(book, idx){
        displayDiv.innerHTML +=
            `<div class="book-item" data-index="${idx}">
                <p>${book.info()}<button class="remove" onclick="removeBook(${idx});">Remove</button></p>
                <button class="isRead">${book.read}</button>
            </div>`;
    });
};

