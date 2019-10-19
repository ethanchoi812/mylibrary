
let myLibrary = [];
let allFields = document.querySelectorAll(".form-field input[type=\"text\"], .form-field input[type=\"number\"]");

document.getElementById('newbook').addEventListener("click", newBook);

document.getElementById('form').addEventListener("submit", function(){

    event.preventDefault();

    let isValid = validateForm();

    if (!isValid) {
        return false;
    } else {
        addToLibrary(myLibrary);
        render(myLibrary);
        clearForm();
    }
});

validation();


function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.readColor = readColor;

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
        readColor = '#00ffc3';
    } else {
        readStatus = 'Not read';
        readColor = '#ffbb00';
    }
    
    let book = new Book(title, author, pages, readStatus, readColor);
    lib.push(book);
    return lib;
};


function toggleRead(idx){
    
    if (myLibrary[idx].readStatus === 'Not read') {
        myLibrary[idx].readStatus = 'I\'ve read it';
        myLibrary[idx].readColor = '#00ffc3';

    } else if (myLibrary[idx].readStatus === 'I\'ve read it') {
        myLibrary[idx].readStatus = 'Not read';
        myLibrary[idx].readColor = '#ffbb00';
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

function validation(){

    allFields.forEach( field => {

        field.addEventListener("blur", () => {
            validateRequired(field);
        });

        field.addEventListener("focus", () => {
            removeErrorMsg(field);
        });
    });
}

function validateForm(){

    let arr = [];
    let allValid;

    allFields.forEach( field => {
       arr.push(validateRequired(field));
    });

    arr.includes(false) ? allValid = false : allValid = true;
    
    return allValid;
}

function validateRequired(field){
        
    let hasValue = !field.validity.valueMissing;

    if(!hasValue) {
        let msg = "This field is required!";
        addErrorMsg(field, msg);
    } else {
        removeErrorMsg(field);
    }

    return hasValue;
}

function addErrorMsg(field, msg){
    let span = document.createElement("span");
    span.classList.add("error-msg");
    span.innerHTML = msg;

    field.parentNode.appendChild(span);
}

function removeErrorMsg(field){
    let errorMsg = field.parentNode.querySelector(".error-msg");

    if(errorMsg) {
        field.parentNode.removeChild(errorMsg);
    }
}


function render(lib){
    let displayDiv = document.getElementById('display');
    displayDiv.innerHTML = "";

    lib.forEach(function(book, idx){

        displayDiv.innerHTML +=
            `<div class="book-item" data-index="${idx}">
                <div class="readLine" style="background:${book.readColor}"onclick="toggleRead(${idx})">${book.readStatus}</div>
                <p>${book.info()}</p>
                <button class="remove" onclick="removeBook(${idx});">Remove</button>
            </div>`;
    });
};

