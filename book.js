
let myLibrary = [];

document.getElementById('newbook').addEventListener("click", newBook);

document.getElementById('form').addEventListener("submit", function(){
    event.preventDefault();

    addToLibrary(myLibrary);
    //render(myLibrary);

    render(myLibrary);

    clearForm();
});




function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return `${title} by ${author}, ${pages} pages`;
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

    document.getElementById('read').value = 'read' ? read = 'I\'ve read it' : read = 'Not read';
    
    let book = new Book(title, author, pages, read);
    lib.push(book);
    return lib;
};


function toggleRead(idx){
    
    if (myLibrary[idx].read === 'Not read') {
        myLibrary[idx].read = 'I\'ve read it';
    } else if (myLibrary[idx].read === 'I\'ve read it') {
        myLibrary[idx].read = 'Not read';
    }

    render(myLibrary);

}


function removeBook(idx){
   myLibrary.splice(idx, 1);
   render(myLibrary);
}


function clearForm(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';

}


function render(lib){
    let displayDiv = document.getElementById('display');
    displayDiv.innerHTML = "";
    //console.log(lib);

    lib.forEach(function(book, idx){
        displayDiv.innerHTML +=
            `<div class="book-item" data-index="${idx}">
                <p>${book.info()}
                <span class="readLine" onclick="toggleRead(${idx})">${book.read}</span>
                <button class="remove" onclick="removeBook(${idx});">Remove</button></p>
            </div>`;
    });
};

