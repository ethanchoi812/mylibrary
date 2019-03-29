
let myLibrary = [];

document.getElementById('newbook').addEventListener("click", newBook);

document.getElementById('form').addEventListener("submit", function(){
    event.preventDefault();

    addToLibrary(myLibrary);

    render(myLibrary);

    clearForm();
});




function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

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
    let readval = document.getElementById('read').checked;

    if (readval === true) {
        readStatus = 'I\'ve read it';
    } else {
        readStatus = 'Not read';
    }
    
    let book = new Book(title, author, pages, readStatus);
    lib.push(book);
    return lib;
};


function toggleRead(idx){
    
    if (myLibrary[idx].readStatus === 'Not read') {
        myLibrary[idx].readStatus = 'I\'ve read it';
    } else if (myLibrary[idx].readStatus === 'I\'ve read it') {
        myLibrary[idx].readStatus = 'Not read';
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
    document.getElementById('read').checked = false;

}


function render(lib){
    let displayDiv = document.getElementById('display');
    displayDiv.innerHTML = "";

    lib.forEach(function(book, idx){
        displayDiv.innerHTML +=
            `<div class="book-item" data-index="${idx}">
                <p>${book.info()}
                <span class="readLine" onclick="toggleRead(${idx})">${book.readStatus}</span></p>
                <button class="remove" onclick="removeBook(${idx});">Remove</button>
            </div>`;
    });
};

